import { useCallback, useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSortedCards, getTargetCardInfo, reorderCards } from "../utils/sortHelpers"
import {
    getSelectedEntryByDate,
    getInitialCardsFromSession,
    handleSessionDateChange
} from "../utils/sessionHelpers"
import { storeTargetState } from "../../../redux/actions"

export const useCardSorting = () => {
    const dispatch = useDispatch()

    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playSessionResults = useSelector(state => state.statistics.statistics_player_scores)
    const playSessionDate = useSelector(state => state.actions.active_date)
    const BUTTONActionSortingNext = useSelector(state => state.target_state.sorting_cards_next)

    const [cards, setCards] = useState([])
    const [sortedCards, setSortedCards] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [activeId, setActiveId] = useState(null)

    const prevPlaySessionDateRef = useRef(null)
    const prevPlaySessionResultsRef = useRef([])
    const playSessionGradesRef = useRef([])

    const hasMountedRef = useRef(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handlePrepareSort = useCallback(() => {
        const sorted = getSortedCards(cards)
        setSortedCards(sorted)
        setCurrentStep(0)
    }, [cards])

    // Need it ?
    const handleNextStepManual = useCallback(() => {
        if (!sortedCards.length || currentStep >= sortedCards.length) return

        const { targetCard, currentIndex } = getTargetCardInfo(sortedCards, currentStep, cards)

        if (currentIndex !== currentStep) {
            setActiveId(targetCard.id)

            const newCards = reorderCards(cards, currentIndex, currentStep)
            setCards(newCards)

            setTimeout(() => {
                setActiveId(null)
                setCurrentStep(prev => prev + 1)

                dispatch(storeTargetState("sorting_cards", false))
                dispatch(storeTargetState("sorting_cards_next", false))
            }, 800)
        } else {
            setCurrentStep(prev => prev + 1)
        }
    }, [sortedCards, currentStep, cards, dispatch])

    const handleNextStepAuto = useCallback(() => {
        if (!sortedCards.length || currentStep >= sortedCards.length || isAnimating) return

        const { targetCard, currentIndex } = getTargetCardInfo(sortedCards, currentStep, cards)

        if (currentIndex !== currentStep) {

            setIsAnimating(true)
            setActiveId(targetCard.id)

            const newCards = reorderCards(cards, currentIndex, currentStep)
            setCards(newCards)

            setTimeout(() => {
                setActiveId(null)
                setCurrentStep(prev => prev + 1)
                setIsAnimating(false)
            }, 800)
        } else {
            setCurrentStep(prev => prev + 1)
        }
    }, [sortedCards, currentStep, cards, isAnimating])


    // Fetch & setup initial cards
    useEffect(() => {
        if (!isDataLoaded || !Array.isArray(playSessionResults)) return

        const selectedEntryDate = getSelectedEntryByDate(playSessionResults, playSessionDate)
        if (!selectedEntryDate) return

        const initialCards = getInitialCardsFromSession(selectedEntryDate)

        handleSessionDateChange(
            playSessionDate,
            playSessionResults,
            prevPlaySessionDateRef,
            prevPlaySessionResultsRef,
            playSessionGradesRef
        )

        setCards(initialCards)
        setSortedCards(getSortedCards(initialCards))
        setCurrentStep(0)
    }, [isDataLoaded, playSessionResults, playSessionDate])

    // React to BUTTONActionSortingNext
    useEffect(() => {
        if (BUTTONActionSortingNext) {
            //handlePrepareSort()
            handleNextStepManual()
            dispatch(storeTargetState("sorting_cards_next", false))
        }
    }, [BUTTONActionSortingNext, handleNextStepManual, dispatch, handlePrepareSort])

    useEffect(() => {
        if (!isAnimating && sortedCards.length > 0 && currentStep < sortedCards.length) {
            const timer = setTimeout(() => {
                handleNextStepAuto()
            }, 700)

            return () => clearTimeout(timer)
        }
    }, [isAnimating, currentStep, sortedCards, handleNextStepAuto])

    return {
        isDataLoaded,
        cards,
        activeId,
        BUTTONActionSortingNext,
        playSessionResults,
        playSessionDate,
        playSessionGradesRef
    }
}
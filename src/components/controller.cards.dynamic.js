import { useEffect, useState, useCallback, useRef } from "react"
import { CardAssembly } from "./card/card.assembly"
import { useSelector, useDispatch } from "react-redux"
import { storeTargetState } from "../redux/actions"
import { compareHeroCount } from "./compare.hero.count"

export const CardControllerDynamic = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playSessionResults = useSelector(state => state.statistics.statistics_player_scores)

    const playSessionDate = useSelector(state => state.actions.active_date)

    const BUTTONActionSortingCards = useSelector(state => state.target_state.sorting_cards)
    const BUTTONActionSortingNext = useSelector(state => state.target_state.sorting_cards_next)

    const [cards, setCards] = useState([])
    const [sortedCards, setSortedCards] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [activeId, setActiveId] = useState(null)
    const dispatch = useDispatch()

    const prevPlaySessionDateRef = useRef(null)
    const prevPlaySessionResultsRef = useRef([])
    const playSessionGradesRef = useRef([])

    // Prepare sorting
    const handlePrepareSort = useCallback(() => {
        const sorted = [...cards].sort((a, b) => b.count - a.count)
        setSortedCards(sorted)
        setCurrentStep(0)
        console.log("Sorted data:", sorted)
    }, [cards])

    // Handle the next step (sorting)
    const handleNextStep = useCallback(() => {
        if (!sortedCards.length || currentStep >= sortedCards.length) return

        const targetCard = sortedCards[currentStep]
        const currentCardsCopy = [...cards]
        const currentIndex = currentCardsCopy.findIndex(c => c.id === targetCard.id)

        // If the card is not already in the correct position, move it
        if (currentIndex !== currentStep) {
            setActiveId(targetCard.id)
            console.log(`Moving card: ${targetCard.id} from position ${currentIndex} to ${currentStep}`)

            currentCardsCopy.splice(currentIndex, 1)
            currentCardsCopy.splice(currentStep, 0, targetCard)

            setCards(currentCardsCopy)

            // After the animation is complete, move on to the next step
            setTimeout(() => {
                setActiveId(null)
                setCurrentStep(prev => prev + 1)
                console.log("Movement animation complete, moving on to the next step...")

                // Reset action flags to false after completion
                dispatch(storeTargetState("sorting_cards", false))
                dispatch(storeTargetState("sorting_cards_next", false))
            }, 800)
        } else {
            // If the card is already in place, immediately move to the next step
            setCurrentStep(prev => prev + 1)
            console.log("Card is already in the right place, moving on to the next step...")
        }
    }, [sortedCards, currentStep, cards, dispatch])

    // Fetch and initialize data from player results
    useEffect(() => {
        if (!isDataLoaded || !Array.isArray(playSessionResults)) return

        const selectedEntryDate = playSessionResults.find(entry => entry.date === playSessionDate)
        if (!selectedEntryDate || !Array.isArray(selectedEntryDate.heroes)) return

        const initialCards = selectedEntryDate.heroes.map(hero => ({
            id: hero.id,
            count: parseInt(hero.count, 10) || 0
        }))

        // COMPARE SESSION DATES & RESULTS
        if (playSessionDate !== prevPlaySessionDateRef.current) {
            console.log("Different date, updating cards: prevPlaySessionDate", prevPlaySessionDateRef.current, "currentPlaySessionDate", playSessionDate)





            playSessionGradesRef.current = compareHeroCount(playSessionResults, prevPlaySessionResultsRef.current, playSessionDate, prevPlaySessionDateRef.current)
            console.log("Hero count differences:", playSessionGradesRef.current)







            prevPlaySessionDateRef.current = playSessionDate
            prevPlaySessionResultsRef.current = playSessionResults
            console.log("prevPlaySessionDateRef.current", prevPlaySessionResultsRef.current)

        }

        setCards(initialCards)

    }, [isDataLoaded, playSessionResults, playSessionDate])

    // Trigger sorting when action flags are true
    useEffect(() => {
        if (BUTTONActionSortingCards) {
            handlePrepareSort();
            dispatch(storeTargetState("sorting_cards", false))
        }

        if (BUTTONActionSortingNext) {
            handleNextStep()
            dispatch(storeTargetState("sorting_cards_next", false))
        }
    }, [BUTTONActionSortingCards, BUTTONActionSortingNext, handlePrepareSort, handleNextStep, dispatch])

    if (!isDataLoaded || !Array.isArray(cards) || cards.length === 0) {
        return <p>Loading cards…</p>
    }

    return (
        <>
            {cards.map((card) => {
                const hero = playSessionResults
                    .find(entry => entry.date === playSessionDate)
                    ?.heroes.find(h => h.id === card.id);

                if (!hero) return null;

                const animationEntry = playSessionGradesRef.current?.find(
                    (grade) => grade.id === card.id
                );

                return (
                    <div key={card.id} className="card mb-4" style={{position: "relative"}}>
                        <CardAssembly
                            id={hero.id}
                            name={hero.name}
                            title={hero.title}
                            count={hero.count}
                            rank={hero.rank}
                            animation={animationEntry?.animation} // <-- Šeit tiek nosūtīta tikai 'animation' vērtība
                            isActive={card.id === activeId}
                        />
                    </div>
                );
            })}
        </>
    );
}
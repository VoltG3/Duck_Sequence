import { useEffect, useState, useCallback } from "react"
import { CardAssembly } from "./card/card.assembly"
import { useSelector, useDispatch } from "react-redux"
import { LevelUpAnimation2 } from "./overlay/info/animation.level.up2"
import { storeTargetState } from "../redux/actions"

export const CardController = () => {
    const dispatch = useDispatch()
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playerResults = useSelector(state => state.player_results)
    const selectedDate = useSelector(state => state.target_date)

    const ActionSortingCards = useSelector(state => state.target_state.sorting_cards)
    const ActionSortingNext = useSelector(state => state.target_state.sorting_cards_next)

    const [cards, setCards] = useState([])
    const [sortedCards, setSortedCards] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [activeId, setActiveId] = useState(null)

    // Prepare sorting
    const handlePrepareSort = useCallback(() => {
        const sorted = [...cards].sort((a, b) => b.count - a.count)
        setSortedCards(sorted)
        setCurrentStep(0)
        console.log("Sorted data:", sorted)
    }, [cards])

    // Handle next step (sorting)
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
        if (!isDataLoaded || !Array.isArray(playerResults)) return

        const selectedEntryDate = playerResults.find(entry => entry.date === selectedDate)
        if (!selectedEntryDate || !Array.isArray(selectedEntryDate.heroes)) return

        const initialCards = selectedEntryDate.heroes.map(hero => ({
            id: hero.id,
            count: parseInt(hero.count, 10) || 0
        }))

        setCards(initialCards)
    }, [isDataLoaded, playerResults, selectedDate])

    // Trigger sorting when action flags are true
    useEffect(() => {
        if (ActionSortingCards) {
            handlePrepareSort();
            dispatch(storeTargetState("sorting_cards", false)); // Reset sorting flag
        }

        if (ActionSortingNext) {
            handleNextStep()
            dispatch(storeTargetState("sorting_cards_next", false)); // Reset the next step flag
        }
    }, [ActionSortingCards, ActionSortingNext, handlePrepareSort, handleNextStep, dispatch]);

    if (!isDataLoaded || !Array.isArray(cards) || cards.length === 0) {
        return <p>Loading cards…</p>
    }

    return (
        <>
            <div className="mb-4 flex gap-4">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={handlePrepareSort}
                >
                    Sorting Card
                </button>
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded"
                    onClick={handleNextStep}
                    disabled={currentStep >= sortedCards.length}
                >
                    Next Card
                </button>
                <LevelUpAnimation2 />
            </div>

            {cards.map((card) => {
                const hero = playerResults
                    .find(entry => entry.date === selectedDate)
                    ?.heroes.find(h => h.id === card.id);

                if (!hero) return null

                return (
                    <div key={card.id} className="card mb-4" style={{ position: "relative" }}>
                        <CardAssembly
                            id={hero.id}
                            name={hero.name}
                            title={hero.title}
                            count={hero.count}
                            rank={hero.rank}
                            isActive={card.id === activeId}
                        />
                    </div>
                )
            })}
        </>
    )
}
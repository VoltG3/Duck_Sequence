import { useEffect, useState } from "react"
import { CardAssembly } from "./card/card.assembly"
import { useSelector } from "react-redux"

export const CardController = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playerResults = useSelector(state => state.player_results)
    const selectedDate = useSelector(state => state.target_date)

    const [cards, setCards] = useState([]) // Empty initial state
    const [sortedCards, setSortedCards] = useState([]); // Ordered list (by "count")
    const [currentStep, setCurrentStep] = useState(0); // Current step (which card to move)
    const [activeId, setActiveId] = useState(null); // Active (movable) card

    useEffect(() => {
        if (!isDataLoaded || !Array.isArray(playerResults)) return;

        const selectedEntryDate = playerResults.find(entry => entry.date === selectedDate)
        if (!selectedEntryDate || !Array.isArray(selectedEntryDate.heroes)) return;

        // Creates an array with id and count
        const initialCards = selectedEntryDate.heroes.map(hero => ({
            id: hero.id,
            count: parseInt(hero.count, 10) || 0 // ensures that count is a number
        }));

        setCards(initialCards) //  Iestata sākotnējo stāvokli
    }, [isDataLoaded, playerResults, selectedDate])

    // Loading checks
    if (!isDataLoaded || !Array.isArray(cards) || cards.length === 0) {
        return <p>Loading cards…</p>
    }

    // Prepares a sorted list of cards by count value (from highest to lowest)
    const handlePrepareSort = () => {
        console.log("prepare to sorting...");
        const sorted = [...cards].sort((a, b) => b.count - a.count);
        setSortedCards(sorted);
        setCurrentStep(0);
        console.log("sorted data:", sorted);
    };

    // Moves the next card to its correct place in the sorted order
    const handleNextStep = () => {
        if (!sortedCards.length || currentStep >= sortedCards.length) return;

        const targetCard = sortedCards[currentStep];
        const currentCardsCopy = [...cards];
        const currentIndex = currentCardsCopy.findIndex(c => c.id === targetCard.id);

        // If the card is not already in the correct place, move it
        if (currentIndex !== currentStep) {
            setActiveId(targetCard.id); // Mark the active card
            console.log(`Moving card: ${targetCard.id} from pozition ${currentIndex} to ${currentStep}`);

            currentCardsCopy.splice(currentIndex, 1); // Removes a card from the current position
            currentCardsCopy.splice(currentStep, 0, targetCard); // Put in the right place

            setCards(currentCardsCopy);

            // After the animation is complete, remove the active and move on to the next step
            setTimeout(() => {
                setActiveId(null);
                setCurrentStep(prev => prev + 1);
                console.log("The movement animation is complete, moving on to the next step...");
            }, 800);
        } else {
            // If the card is already in place, immediately move to the next step
            setCurrentStep(prev => prev + 1)
            console.log("The card is already in the right place, move on to the next step...")
        }
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
            </div>


            {cards.map((card) => {
                const hero = playerResults
                    .find(entry => entry.date === selectedDate)
                    ?.heroes.find(h => h.id === card.id)

                if (!hero) return null;

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
import { CardAssembly } from "./card/card.assembly"
import { useSelector } from "react-redux"

export const CardController2 = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playerResults = useSelector(state => state.player_results)
    const selectedDate = useSelector(state => state.target_date)

    if (!isDataLoaded || !Array.isArray(playerResults) || playerResults.length === 0) {
        return <p>Loading cards…</p>
    }

    const selectedEntryDate = playerResults.find(entry => entry.date === selectedDate)
    if (!selectedEntryDate || !Array.isArray(selectedEntryDate.heroes)) {
        return <p>No data found for selected date.</p>
    }

    return (
        <>
            {selectedEntryDate.heroes.map((player, index) => {

                return (
                    <div key={`${player.id}-${index}`}>
                        <CardAssembly
                            key={ player.index }
                            id={ player.id }
                            name={ player.name }
                            title={ player.title }
                            count={ player.count }
                            rank={ player.rank }
                        />
                    </div>
                )
            })}
        </>
    )
}

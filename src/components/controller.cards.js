import { CardAssembly } from "./card/card.assembly"
import { CardCrown } from "./card/card.crown"
import { useSelector } from "react-redux"

export const CardController = ({ getPlayerCardsBySelectedRank }) => {
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

    const playerResultsBySelectedDate = selectedEntryDate.heroes.filter(hero => hero.rank === getPlayerCardsBySelectedRank)


    return (
        <>
            {playerResultsBySelectedDate.map((player, index) => {

                return (
                    <div key={`${player.id}-${index}`}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "auto",
                            height: "60px",
                        }}>
                            { getPlayerCardsBySelectedRank !== ""
                                ? <CardCrown rank={ player.rank } />
                                : null
                            }
                        </div>
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

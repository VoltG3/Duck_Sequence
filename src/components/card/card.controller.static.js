import { Card } from "./components/card"
import { useSelector } from "react-redux"

export const CardControllerStatic = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playSessionResults = useSelector(state => state.statistics.statistics_player_scores)
    const playSessionDate = useSelector(state => state.actions.active_date)

    if (!isDataLoaded || !Array.isArray(playSessionResults) || playSessionResults.length === 0) {
        return <p>Loading cards…</p>
    }

    const currentDay = playSessionResults.find(entry => entry.date === playSessionDate)

    if (!currentDay || !Array.isArray(currentDay.heroes)) {
        return <p>No data for selected day.</p>
    }

    return (
        <>
            {currentDay.heroes.map((player, index) => (
                <div key={`${player.id}-${index}`}>
                    <Card
                        id={player.id}
                        name={player.name}
                        title={player.title}
                        count={player.count}
                        rank={player.rank}
                    />
                </div>
            ))}
        </>
    )
}

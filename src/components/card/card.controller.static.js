import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Card } from "./components/card"

export const CardControllerStatic = () => {
    const [sortedHeroes, setSortedHeroes] = useState([])

    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playSessionResults = useSelector(state => state.statistics.statistics_player_scores)
    const playSessionDate = useSelector(state => state.actions.active_date)

    useEffect(() => {
        if (!isDataLoaded || !Array.isArray(playSessionResults)) return

        const currentDay = playSessionResults.find(entry => entry.date === playSessionDate)

        if (!currentDay || !Array.isArray(currentDay.heroes)) return

        const sortHeroes = (heroes) => {
            const priorityRanks = ["three_times_first", "1st", "2nd", "3rd"]

            const prioritized = priorityRanks.flatMap(rank =>
                heroes.filter(hero => hero.rank === rank)
            )

            const others = heroes
                .filter(hero => !priorityRanks.includes(hero.rank))
                .sort((a, b) => Number(b.count) - Number(a.count))

            return [...prioritized, ...others]
        }

        const sorted = sortHeroes(currentDay.heroes)
        setSortedHeroes(sorted)
    }, [isDataLoaded, playSessionResults, playSessionDate])

    if (!isDataLoaded || !Array.isArray(playSessionResults) || playSessionResults.length === 0) {
        return <p>Loading cards…</p>
    }

    if (sortedHeroes.length === 0) {
        return <p>Sorting heroes…</p>
    }

    return (
        <>
            {sortedHeroes.map((player, index) => (
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
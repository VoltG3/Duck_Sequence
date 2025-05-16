import React from "react"
import { useCardSorting } from "./hooks/useCardSorting"
import { Card } from "./components/card"

export const CardControllerDynamic = () => {
    const {
        isDataLoaded,
        cards,
        activeId,
        BUTTONActionSortingNext,
        playSessionResults,
        playSessionDate,
        playSessionGradesRef
    } = useCardSorting()

    if (!isDataLoaded || cards.length === 0) {
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
                )

                return (
                    <div key={card.id} className="card mb-4" style={{position: "relative"}}>
                        <Card
                            id={hero.id}
                            name={hero.name}
                            title={hero.title}
                            count={hero.count}
                            rank={hero.rank}
                            animation={animationEntry?.animation} // <-- Šeit tiek nosūtīta tikai 'animation' vērtība
                            isActive={card.id === activeId}
                        />
                    </div>
                )
            })}
        </>
    )
}
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"

export default function SectionWinnersThird() {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    return (
        <div>
            {Object.entries(data).map(([key, records]) => (
                <div key={key}>
                    {records.map((item, index) =>
                        item.rank === "thirdPlace" ? (
                            <p key={index}>
                                {item.name} – Count: {item.count} – Rank: {item.rank}
                            </p>
                        ) : null
                    )}
                </div>
            ))}
        </div>
    )
}
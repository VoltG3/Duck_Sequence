import { Card } from "./card"
import { Crown } from "./crown"
import { useSelector } from "react-redux"

export const GetCards = ({ variant }) => {
    const records = useSelector(state => state.result_table)
    const selectedDate = useSelector(state => state.target_date)
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    console.log("target date", selectedDate)

    if (!isDataLoaded || !Array.isArray(records) || records.length === 0) {
        return <p>Loading cards…</p>
    }

    const result = []
    const selectedEntry = records.find(entry => entry.date === selectedDate);

    if (!selectedEntry) {
        return <p>No data found for selected date.</p>;
    }

    Object.entries(selectedEntry).forEach(([key, value]) => {
        if (key.startsWith("player") && value.rank === variant) {
            result.push({ ...value, id: key });
        }
    })

    if (result.length === 0) {
        return <p>No matching cards.</p>
    }

    return (
        <>
            {result.map((item, index) => (
                <div key={`${item.id}-${index}`}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "auto",
                        height: "60px"
                    }}>
                        {variant !== "" ? <Crown variant={variant}/> : null}
                    </div>
                    <Card
                        key={index}
                        id={item.id}
                        name={item.name}
                        count={item.count}
                        rank={item.rank}
                        image={item.imageURL}
                    />
                </div>
            ))}
        </>
    )
}
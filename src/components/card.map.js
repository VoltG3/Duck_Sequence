import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { Card } from "./card"
import { Crown } from "./crown"

export const GetCards = ({ variant }) => {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    return (
        <>
            {Object.entries(data).map(([key, records]) => (
                <div key={key}>
                    {records.map((item, index) =>
                        item.rank === variant ? (
                            <>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "auto",
                                        height: "60px"
                                }}>
                                    { variant === "firstPlace" ? <Crown /> : null }
                                </div>

                                <Card
                                    key={ index }
                                    id={ item.id }
                                    name={ item.name}
                                    count={ item.count }
                                    rank={ item.rank }
                                />
                            </>
                        ) : null
                    )}
                </div>
            ))}
        </>
    )
}
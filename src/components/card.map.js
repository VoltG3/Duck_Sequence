import { Card } from "./card"
import { Crown } from "./crown"
import { useSelector } from "react-redux"

export const GetCards = ({ variant }) => {
    const records = useSelector(state => state.result_table)

    return (
        <>
            {Object.entries(records).map(([key, records]) => (
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
                                    { variant !== "" ? <Crown variant={variant} /> : null }
                                </div>

                                <Card
                                    key={ index }
                                    id={ item.id }
                                    name={ item.name}
                                    count={ item.count }
                                    rank={ item.rank }
                                    image={ item.imageURL }
                                />
                            </>
                        ) : null
                    )}
                </div>
            ))}
        </>
    )
}
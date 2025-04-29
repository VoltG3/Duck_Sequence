import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { Card } from "../components/card"

const FirstPlaceCollection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    //border: 10px solid red;
`

export default function SectionWinnersFirst() {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    return (
        <>
            {Object.entries(data).map(([key, records]) => (
                <FirstPlaceCollection key={key}>
                    {records.map((item, index) =>
                        item.rank === "firstPlace" ? (
                            <Card
                                id={ item.id }
                                name={ item.name}
                                count={ item.count }
                                rank={ item.rank }
                            />
                        ) : null
                    )}
                </FirstPlaceCollection>
            ))}
        </>
    )
}
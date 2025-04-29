import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { Card } from "../components/card"

const SecondPlaceCollection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    //border: 10px solid red;
`

export default function SectionWinnersSecond() {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    return (
        <>
            {Object.entries(data).map(([key, records]) => (
                <SecondPlaceCollection key={key}>
                    {records.map((item, index) =>
                        item.rank === "secondPlace" ? (
                            <Card
                                id={ item.id }
                                name={ item.name}
                                count={ item.count }
                                rank={ item.rank }
                            />
                        ) : null
                    )}
                </SecondPlaceCollection>
            ))

            }
        </>
    )
}
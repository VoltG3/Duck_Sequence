import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { Card } from "../components/card"

const StyledSectionLosers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
    //border: 1px solid var(--border--color);
    
    .losersCollection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        //border: 10px solid red;
    }
`

export default function SectionLosers() {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    return (
        <StyledSectionLosers>
            <>
                {Object.entries(data).map(([key, records]) => (
                    <div className={"losersCollection"} key={key}>
                        {records.map((item, index) =>
                            item.rank === "" ? (
                                <Card
                                    id={ item.id }
                                    name={ item.name}
                                    count={ item.count }
                                    rank={ item.rank }
                                />
                            ) : null
                        )}
                    </div>
                ))}
            </>
        </StyledSectionLosers>
    )
}
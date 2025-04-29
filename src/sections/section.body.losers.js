import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"

const StyledSectionLosers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
    border: 1px solid var(--border--color);
    
    & div { border: 1px solid red; }
`

export default function SectionLosers() {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    return (
        <StyledSectionLosers>
            <div>
                {Object.entries(data).map(([key, records]) => (
                    <div key={key}>
                        {records.map((item, index) =>
                            item.rank === "" ? (
                                <p key={index}>
                                    {item.name} – Count: {item.count} – Rank: {item.rank}
                                </p>
                            ) : null
                        )}
                    </div>
                ))}
            </div>
        </StyledSectionLosers>
    )
}
import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100px;
    background: var(--color--primary);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    
    & p {
        font-size: 45px;
        font-variant: small-caps;
    }
`

export default function SectionHeader() {
    const { data, loading } = useContext(DataContext)

    if (loading) return <p>Loading...</p>

    const totalCount = Object.entries(data).reduce((total, [key, records]) => {
        return total + records.reduce((sum, item) => sum + parseInt(item.count, 10), 0)
    }, 0) //console.log("Total count:", totalCount);

    return (
        <StyledHeader>
            <p>Duck Sequens: <span style={{ color: "yellow" }}>{ totalCount }</span></p>
        </StyledHeader>
    )
}
import styled from "styled-components"

const StyledSectionLosers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
    border: 1px solid var(--border--color);
`

export default function SectionLosers() {

    return (
        <StyledSectionLosers>
            <p>Losers</p>
        </StyledSectionLosers>
    )
}
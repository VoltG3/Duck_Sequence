import styled from "styled-components"

const StyledSectionWinners = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
    border: 1px solid var(--border--color);
`

export default function SectionWinners() {

    return (
        <StyledSectionWinners>
            <p>winners</p>
        </StyledSectionWinners>
    )
}
import styled from "styled-components"
import SectionWinnersFirst from "./section.body.winners.first"
import SectionWinnersSecond from "./section.body.winners.second"
import SectionWinnersThird from "./section.body.winners.third"

const StyledSectionWinners = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: auto;
    border: 1px solid var(--border--color);
    
    & div { border: 1px solid red; }
`

export default function SectionWinners() {

    return (
        <StyledSectionWinners>
            <SectionWinnersSecond />
            <SectionWinnersFirst />
            <SectionWinnersThird />
        </StyledSectionWinners>
    )
}
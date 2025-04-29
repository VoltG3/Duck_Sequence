import styled from "styled-components"
import SectionWinners from "./section.body.winners"
import SectionLosers from "./section.body.losers"

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-width: 70%;
    width: auto;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid var(--border--color);
`

export default function SectionBody() {

    return (
        <StyledBody>
            <SectionWinners />
            <SectionLosers />
        </StyledBody>
    )
}
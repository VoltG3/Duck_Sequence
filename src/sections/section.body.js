import styled from "styled-components"
import SectionWinners from "./section.body.winner"
import SectionLosers from "./section.body.losers"

const StyledBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: auto;
    height: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: white;
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
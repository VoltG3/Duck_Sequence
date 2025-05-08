import styled from "styled-components"
import { CardController } from "../components/controller.cards"

function SectionContent() {

    return (
        <StyledContent>
            <div className="cardSet">
                <CardController getPlayerCardsBySelectedRank={"1st"} />
                <CardController getPlayerCardsBySelectedRank={"2nd"} />
                <CardController getPlayerCardsBySelectedRank={"3rd"} />
            </div>

            <div className="cardSet">
                <CardController getPlayerCardsBySelectedRank={""} />
            </div>
        </StyledContent>
    )
}

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.1);
    
    .cardSet {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        width: auto;
        height: 50%;
        border: solid 1px red;
    }
`

export default SectionContent
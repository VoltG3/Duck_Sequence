import styled from "styled-components"
import { GetCards } from "../components/card.map"

function SectionContent() {

    return (
        <StyledContent>
            <div className="innerSectionContent">
                <div className="cardSet">
                    <GetCards variant={"place_first"} />
                    <GetCards variant={"place_second"} />
                    <GetCards variant={"place_third"} />
                </div>

                <div className="cardSet">
                     <GetCards variant={""} />
                </div>
            </div>
        </StyledContent>
    )
}

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: auto;
    height: 100%;
    
    .innerSectionContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 80px;
        backdrop-filter: blur(6px);
        border-radius: 15px;
        box-shadow:
                4px 0 6px rgba(0, 0, 0, 0.6),   /* right shadow  */
                0 4px 6px rgba(0, 0, 0, 0.6);   /* bottom shadow */
        background-color: rgba(255, 255, 255, 0.1);
    }
    
    .cardSet {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        width: auto;
        height: auto;
    }
`

export default SectionContent
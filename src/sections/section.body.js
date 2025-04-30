import styled from "styled-components"
import SectionWinners from "./section.body.winner"
import SectionLosers from "./section.body.losers"

const StyledBody = styled.div`
   // flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: auto;
    height: 100%;
    
    //border: solid 3px red;
   
    
    .innerSectionBody {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        //width: auto;
        //height: auto;
        //margin-top: 50px;
        //margin-bottom: 50px;
        padding: 120px;
        backdrop-filter: blur(6px);
        border-radius: 15px;
        box-shadow:
                4px 0 6px rgba(0, 0, 0, 0.6),   /* right shadow  */
                0 4px 6px rgba(0, 0, 0, 0.6);   /* bottom shadow */
        background-color: rgba(255, 255, 255, 0.1);
    }
`

export default function SectionBody() {

    return (
        <StyledBody>
            <div className="innerSectionBody">
                <SectionWinners />
                <SectionLosers />
            </div>
        </StyledBody>
    )
}
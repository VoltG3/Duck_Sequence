import styled from "styled-components"
import config from '../../../config'

export const StyledCardCrown = styled.img`
    width: auto;
    height: 60px;
    //filter: brightness(0%) saturate(100%) invert(88%) sepia(0%) saturate(750%) hue-rotate(180deg);
`

export const CardCrown = ({ rank }) => {

    const getCrown = () => {
        switch(rank) {
            case "1st": return config.crown.URL_crown_01;
            case "2nd": return config.crown.URL_crown_02;
            case "3rd": return config.crown.URL_crown_03;
            default: return null;
        }
    }

    return (
        <div>
            <StyledCardCrown
                src={getCrown(rank)}
                alt={"crown"}
            />

            {/* <p>rank { rank }</p> 1st 2nd 3rd*/}
        </div>
    )
}
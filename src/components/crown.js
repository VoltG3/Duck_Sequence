import styled from "styled-components"
import config from '../config'

export const StyledCrown = styled.img`
    width: auto;
    height: 60px;
    //filter: brightness(0%) saturate(100%) invert(88%) sepia(0%) saturate(750%) hue-rotate(180deg);
`

export const Crown = ({ variant }) => {

    const getCrown = () => {
        switch(variant) {
            case "firstPlace": return config.crown.URL_crown_01;
            case "secondPlace": return config.crown.URL_crown_02;
            case "thirdPlace": return config.crown.URL_crown_03;
            default: return null;
        }
    }

    return (
        <div>
            <StyledCrown
                src={getCrown(variant)}
                alt={"crown"}
            />
        </div>
    )
}
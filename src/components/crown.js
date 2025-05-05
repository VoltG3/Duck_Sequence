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
            case "place_first": return config.crown.URL_crown_01;
            case "place_second": return config.crown.URL_crown_02;
            case "place_third": return config.crown.URL_crown_03;
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
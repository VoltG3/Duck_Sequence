import styled from "styled-components"
import config from '../config'

export const StyledCrown = styled.img`
    width: auto;
    height: 60px;
`

export const Crown = () => {

    return (
        <div>
            <StyledCrown
                src={config.crown.URL_crown_01}
                alt={"crown"}
            />
        </div>
    )
}
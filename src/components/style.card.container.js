import styled from "styled-components"

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: auto;
    height: auto;
    //padding: 10px;
    margin: 10px;
    background-color: #babaae;
    border-radius: 10px;
    overflow: hidden;
    
    & div {
        display: flex;
    }

    & p {
        font-variant: small-caps;
        margin: 0;
    }
`
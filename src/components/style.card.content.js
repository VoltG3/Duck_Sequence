import styled from "styled-components"

export const StyledCardContent = styled.div`
   
        flex-direction: row;
        display: flex;
        padding: 10px;
    
    .card__content__rank {
        align-self: center;
        //border: solid 1px black;
        //border-radius: 0 0 12px 12px;
    }

    .card__content__info {
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-right: 10px;
        //background-color: red;
    }

    .card__content__info__name {
        font-size: 22px;
        flex-direction: column;
        margin-bottom: 10px;
    }
`
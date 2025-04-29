import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 200px;
    height: 250px;
    border: 1px solid black;
`

export const Card = ({ id, name, count, rank}) => {

    return (
        <StyledCard>
            <p>id { id }</p>
            <p>name { name }</p>
            <p>count { count }</p>
            <p>rank { rank }</p>
        </StyledCard>
    )
}
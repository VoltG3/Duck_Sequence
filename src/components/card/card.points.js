import styled from "styled-components"

export const StyledCardPoints = styled.div`
    background: #282c34;

    & p {
        font-weight: 800;
        font-size: 24px;
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left: 14px;
        color: white;
    }
`

export const CardPoints = ({ count }) => {

    return (
        <StyledCardPoints>
            <p>{ count }</p>
        </StyledCardPoints>
    )
}
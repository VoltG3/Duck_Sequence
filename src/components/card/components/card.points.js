import styled from "styled-components"

export const StyledCardPoints = styled.div`

    background-color: ${({ rank }) =>
            rank === "1st" ? "var(--range--color--01)" :
            rank === "2nd" ? "var(--range--color--02)" :
            rank === "3rd" ? "var(--range--color--03)" :
                             "var(--range--color--04)"
    };

    & p {
        font-weight: 800;
        font-size: 24px;
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left: 14px;
        color: white;
    }
`

export const CardPoints = ({ count, rank }) => {

    return (
        <StyledCardPoints rank={ rank }>
            <p>{ count }</p>
        </StyledCardPoints>
    )
}
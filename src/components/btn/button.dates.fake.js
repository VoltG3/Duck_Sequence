import styled from "styled-components"

const StyledFakeButtonDates = styled.button`
    position: relative;
    background: transparent;
    border: none;
        width: auto;
        height: 30px;
    font-size: 0.875rem; /* 14px */
    padding-left: var(--space);
    padding-right: var(--space);
    cursor: pointer;
    color: white;
    z-index: 4;
`

export const FakeButtonDates = () => {

    return (
        <StyledFakeButtonDates><p>{" "}</p></StyledFakeButtonDates>
    )
}
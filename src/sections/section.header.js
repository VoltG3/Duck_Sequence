import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100px;
    border: 1px solid var(--border--color);
`

export default function SectionHeader() {

    return (
        <StyledHeader>
            Header
        </StyledHeader>
    )
}
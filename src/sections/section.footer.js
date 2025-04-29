import styled from "styled-components"

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 40px;
    border: 1px solid red;
`

export default function SectionFooter() {

    return (
        <StyledFooter>
            <p>Self-Sabotage team  © 2025 CodeHode</p>
        </StyledFooter>
    )
}
import styled from "styled-components"

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 1px solid var(--border--color);
`

export default function SectionFooter() {

    return (
        <StyledFooter>
            <p>Self-Sabotage team  © 2025 CodeHode</p>
        </StyledFooter>
    )
}
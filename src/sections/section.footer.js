import styled from "styled-components"

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40px;
    background: #282c34;
    color: white;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.6);
`

export default function SectionFooter() {

    return (
        <StyledFooter>
            <p>Self-Sabotage <b><i style={{ color: "yellow" }}>team</i></b>  © 2025 CodeHode</p>
        </StyledFooter>
    )
}
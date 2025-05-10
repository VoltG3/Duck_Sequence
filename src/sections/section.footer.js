import styled from "styled-components"
import {AudioController} from "../components/controller.audio";

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40px;
    background: var(--color--primary);
    color: white;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.6);
`

export default function SectionFooter() {

    return (
        <StyledFooter>
            <p>Self-Sabotage <b><i style={{ color: "yellow" }}>team</i></b>  © 2025 CodeHode</p>
            <AudioController />
        </StyledFooter>
    )
}
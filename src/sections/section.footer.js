import styled from "styled-components"
import {storeTargetState} from "../redux/actions";
import {useDispatch} from "react-redux";

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        width: 100vw;
        height: auto;
    background: var(--color--primary);
    color: white;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.6);
    
    & p {
        font-size: var(--font--size--footer);
        padding-top: 0.625rem;     /* 10px */
        padding-bottom: 0.625rem;  /* 10px */
    }
`

export default function SectionFooter() {
    const dispatch = useDispatch()

    return (
        <StyledFooter>

            <p>Self-Sabotage <b><i style={{ color: "yellow" }}>team</i></b>  © 2025 CodeHode</p>
        </StyledFooter>
    )
}

import styled from "styled-components"
import { useDispatch } from "react-redux"
import { storeTargetState } from "../redux/actions"

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
            {/*
            <button onClick={() => dispatch(storeTargetState("play_animation_level_equal", true)) }>level_equal</button>
            <button onClick={() => dispatch(storeTargetState("play_animation_level_down", true)) }>level_down</button>
            <button onClick={() => dispatch(storeTargetState("play_animation_level_up", true)) }>level_up</button>
            <button onClick={() => dispatch(storeTargetState("sorting_cards", true)) }>FIRST sort</button>
            <button onClick={() => dispatch(storeTargetState("sorting_cards_next", true)) }>THEN next animaton</button>
            */}

            <p>Self-Sabotage <b><i style={{ color: "yellow" }}>team</i></b>  © 2025 CodeHode</p>
        </StyledFooter>
    )
}
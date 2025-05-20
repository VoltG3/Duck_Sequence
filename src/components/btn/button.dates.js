import styled from "styled-components"
import { storeActions } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledButtonDates = styled.button`
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
    
    &:hover {
        color: yellow;
    }
`

export const ButtonDates = ({ targetDate }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(storeActions("play_audio_button", true))
        dispatch(storeActions("active_date", targetDate))
    }

    return (
        <StyledButtonDates onClick={() => handleClick() }><p>{ targetDate }</p></StyledButtonDates>
    )
}
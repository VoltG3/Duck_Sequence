import styled from "styled-components"
import { storeTargetAudio, storeTargetDate } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnDates = styled.button`
    position: relative;
    padding: 0.5rem 1.2rem;
    background: transparent;
    border: none;
    width: auto;
    height: 35px;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    z-index: 4;
    // border: solid 1px yellow;
    
    &:hover {
        color: yellow;
    }
`

export const BtnDates = ({ date }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(storeTargetAudio("play_audio_button", true))
        dispatch(storeTargetDate(date))
    }

    return (
        <StyledBtnDates onClick={() => handleClick() }>{ date }</StyledBtnDates>
    )
}
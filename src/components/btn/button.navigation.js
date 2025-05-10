import styled from "styled-components"
import { storeTargetAudio, storeTargetDate } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnNavigation = styled.button`
    padding: 2px;
`

export const BtnNavigation = ({ date }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(storeTargetAudio("play_audio_button", true))
        dispatch(storeTargetDate(date))
    }

    return (
        <StyledBtnNavigation onClick={() => handleClick() }>{ date }</StyledBtnNavigation>
    )
}
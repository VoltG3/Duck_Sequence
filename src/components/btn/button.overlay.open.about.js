import styled from "styled-components"
import { storeTargetAbout, storeTargetAudio } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnOpenOverlayAbout = styled.button`
    padding: 10px;
`

export const BtnOpenOverlayAbout = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(storeTargetAudio("play_audio_button", true))
        dispatch(storeTargetAudio("play_audio_about", true))
        dispatch(storeTargetAbout(true))
    }

    return (
        <StyledBtnOpenOverlayAbout onClick={() => handleClick()}>About</StyledBtnOpenOverlayAbout>
    )
}
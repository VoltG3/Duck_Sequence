import styled from "styled-components"
import { storeActions } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnOpenOverlayAbout = styled.button`
    padding: 10px;
`

export const ButtonOpenOverlayAbout = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(storeActions("play_audio_button", true))
        dispatch(storeActions("play_audio_about", true))
        dispatch(storeActions("visible_overlay_section_about", true))
    }

    return (
        <StyledBtnOpenOverlayAbout onClick={() => handleClick()}>About</StyledBtnOpenOverlayAbout>
    )
}
import styled from "styled-components"
import { storeActions } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnCloseOverlay = styled.button`
    padding: 10px;
`

export const ButtonOverlayCloseAbout = () => {
    const dispatch = useDispatch()

    const closeSectionAbout = () => {
        dispatch(storeActions("visible_overlay_section_about", false))
        dispatch(storeActions("play_audio_button", true))

        return null
    }

    return (
        <StyledBtnCloseOverlay onClick={() => closeSectionAbout()}>close</StyledBtnCloseOverlay>
    )
}
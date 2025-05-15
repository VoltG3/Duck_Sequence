import styled from "styled-components"
import { storeActions } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnCloseOverlay = styled.button`
    padding: 10px;
`

export const ButtonOverlayCloseInfo = () => {
    const dispatch = useDispatch()

    const closeSectionInfo = () => {
        dispatch(storeActions("active_player", ""))
        dispatch(storeActions("visible_overlay_section_info", false))
        dispatch(storeActions("play_audio_button", true))

        return null
    }

    return (
        <StyledBtnCloseOverlay onClick={() => closeSectionInfo()}>close</StyledBtnCloseOverlay>
    )
}
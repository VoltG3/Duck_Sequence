import styled from "styled-components"
import {
    storeTargetAbout,
    storeTargetAudio,
    storeTargetPlayer
} from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledBtnCloseOverlay = styled.button`
    padding: 10px;
`

export const BtnCloseOverlay = ({ closeTargetSection }) => {
    const dispatch = useDispatch()

    const closeSection = () => {
        if (closeTargetSection === "closeInfoSection") {
            dispatch(storeTargetPlayer("target_player_id", ""))
            dispatch(storeTargetPlayer("target_player_name",""))
            dispatch(storeTargetPlayer("target_player_rank",""))
            dispatch(storeTargetPlayer("target_player_title",""))
            dispatch(storeTargetPlayer("target_player_count",0))
            dispatch(storeTargetAudio("play_audio_button", true))
            console.log("[ info     CLOSE ] - BTN target player NULL ", "")
            console.log("[ info     CLOSE ] - BTN target player name ", "")
            console.log("[ info     CLOSE ] - BTN target player rank ", "")
            console.log("[ info     CLOSE ] - BTN target player title", "")
            console.log("[ info     CLOSE ] - BTN target player count", 0)
        }

        if (closeTargetSection === "closeAboutSection") {
            dispatch(storeTargetAbout(false))
            dispatch(storeTargetAudio("play_audio_button", true))
            console.log("[ info     CLOSE ] - BTN target sect.  about", false)
        }

        return null
    }

    return (
        <StyledBtnCloseOverlay onClick={() => closeSection(closeTargetSection)}>close</StyledBtnCloseOverlay>
    )
}
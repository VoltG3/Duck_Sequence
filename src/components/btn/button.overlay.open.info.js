import styled from "styled-components"
import {storeTargetAudio, storeTargetPlayer} from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledInfoButton = styled.div`

    & p {
        font-size: 14px;
        padding-top: 12px;
        color: var(--color--info--default);
        transition: color 0.5s ease-in-out;

        &:hover {
            font-weight: bold;
            color: ${({ $rank }) => 
                    $rank === "1st" ? "var(--range--color--01)" : 
                    $rank === "2nd" ? "var(--range--color--02)" :
                    $rank === "3rd" ? "var(--range--color--03)" : "var(--range--color--04)"};
            cursor: pointer;
        }
    }
`

export const BtnOpenOverlayInfo = ({ id, rank, count, title, name }) => {
    const dispatch = useDispatch()

    {/* FALSE VAR ?*/}

    const onHandle = (id) => {
        console.log("[ card info  SET ] - BTN target player ID   ", id)
        console.log("[ card info  SET ] - BTN target player name ", name)
        console.log("[ card info  SET ] - BTN target player rank ", rank)
        console.log("[ card info  SET ] - BTN target player title", title)
        console.log("[ card info  SET ] - BTN target player count", count)
        //console.log("[ card info  SET ] - BTN target audio      ", "active_info")

        dispatch(storeTargetPlayer("target_player_id", id))
        dispatch(storeTargetPlayer("target_player_name", name))
        dispatch(storeTargetPlayer("target_player_rank", rank))
        dispatch(storeTargetPlayer("target_player_title", title))
        dispatch(storeTargetPlayer("target_player_count", count))
        dispatch(storeTargetAudio("play_audio_button", true))
        dispatch(storeTargetAudio("play_audio_info", true))

    }

    return (
        <StyledInfoButton onClick={() => onHandle(id)} $rank={rank}>
            <p>More about this bird</p>
        </StyledInfoButton>
    )
}
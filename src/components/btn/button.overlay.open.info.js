import styled from "styled-components"
import { storeActions } from "../../redux/actions"
import { useDispatch } from "react-redux"

const StyledInfoButton = styled.div`

    & p {
        font-size: 14px;
        padding-top: 12px;
        color: var(--color--info--default);
        transition: color 0.5s ease-in-out;
    }

    &:hover > p {
        font-weight: bold;
        cursor: pointer;
        color: ${({ $rank }) =>
                $rank === "three_times_first" ? "var(--range--color--0B)" : 
                $rank === "1st" ? "var(--range--color--01)" :
                $rank === "2nd" ? "var(--range--color--02)" :
                $rank === "3rd" ? "var(--range--color--03)" : "var(--range--color--04)"};
    }
`

export const ButtonOpenOverlayInfo = ({ id, rank, name, title, count }) => {
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(storeActions("active_player", id))

        dispatch(storeActions("info_target_player_id", id))
        dispatch(storeActions("info_target_player_rank", rank))
        dispatch(storeActions("info_target_player_name", name))
        dispatch(storeActions("info_target_player_title", title))
        dispatch(storeActions("info_target_player_count", count))

        dispatch(storeActions("play_audio_button", true))
        dispatch(storeActions("play_audio_info", true))
        dispatch(storeActions("visible_overlay_section_info", true))

    }

    return (
        <StyledInfoButton onClick={() => handleClick(id)} $rank={rank}>
            <p>More about this bird</p>
        </StyledInfoButton>
    )
}
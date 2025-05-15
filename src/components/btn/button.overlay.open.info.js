import styled from "styled-components"
import { storeActions } from "../../redux/actions"
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

export const ButtonOpenOverlayInfo = ({ id, rank }) => {
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(storeActions("active_player", id))

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
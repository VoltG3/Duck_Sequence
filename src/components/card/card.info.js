import styled from "styled-components"
import {
    storeTargetPlayer,
    storeTargetPlayerName,
    storeTargetPlayerRank,
    storeTargetPlayerTitle,
    storeTargetPlayerCount
} from "../../redux/actions"
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

export const CardInfo = ({ id, rank, count, title, name }) => {
    const dispatch = useDispatch()

    const onHandle = (id) => {
        console.log("[ card info  SET ] - BTN target player ID   ", id)
        console.log("[ card info  SET ] - BTN target player name ", name)
        console.log("[ card info  SET ] - BTN target player rank ", rank)
        console.log("[ card info  SET ] - BTN target player title", title)
        console.log("[ card info  SET ] - BTN target player count", count)

        dispatch(storeTargetPlayer(id))
        dispatch(storeTargetPlayerName(name))
        dispatch(storeTargetPlayerRank(rank))
        dispatch(storeTargetPlayerTitle(title))
        dispatch(storeTargetPlayerCount(count))

    }

    return (
        <StyledInfoButton onClick={() => onHandle(id)} $rank={rank}>
            <p>More about this bird</p>
        </StyledInfoButton>
    )
}
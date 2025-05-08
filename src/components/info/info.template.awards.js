import { useSelector } from "react-redux"

export const InfoTemplateAwards = ({ chapterHeader, chapterContent }) => {
    const targetPlayerCount = useSelector(state => state.target_player_count)
    const totalCount = Number(targetPlayerCount) || 0

    return (
        <div className={"info__item"}>
            <div className={"info__item__header"}>
                <h4 className="inline-heading">{ chapterHeader }</h4>
            </div>

            <div>
                <p>{ chapterContent.repeat(totalCount) }</p>
            </div>
        </div>
    )
}
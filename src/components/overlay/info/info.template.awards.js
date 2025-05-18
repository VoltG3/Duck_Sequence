import { useSelector } from "react-redux"

export const InfoTemplateAwards = ({ chapterHeader, chapterContent }) => {
    const targetPlayerCount = useSelector(state => state.actions.info_target_player_count)
    const totalCount = Number(targetPlayerCount) || 0

    const nullAwards = <p style={{ color: "red"}}>Null</p>

    return (
        <div className={"info__item"}>
            <div className={"info__item__header"}>
                <h4 className="inline-heading">{ chapterHeader }</h4>
            </div>

            <div>
                <p>{ Number(totalCount) === 0 ? nullAwards : chapterContent.repeat(Number(totalCount)) }</p>
            </div>
        </div>
    )
}
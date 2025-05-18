import { useSelector } from "react-redux"

export const InfoTemplateName = ({ playerSecondName }) => {
    const targetPlayerId = useSelector(state => state.actions.info_target_player_id)
    const targetPlayerRank = useSelector(state => state.actions.info_target_player_rank)
    const targetPlayerName = useSelector(state => state.actions.info_target_player_name)
    const targetPlayerTitle = useSelector(state => state.actions.info_target_player_title)

    const getPrefix = () => {
        switch(targetPlayerId) {
            case "hero_01": return "le"
            case "hero_02": return "von"
            case "hero_03": return "le"
            case "hero_04": return "Sir"
            case "hero_05": return "van"
            case "hero_06": return "von"
            case "hero_07": return "van"
            case "hero_08": return "mac"
            case "hero_09": return "de"
            case "hero_10": return "mac"
            default: return null
        }
    }

    return (
        <div className={"info__item"}>
            <h2>
                <span style={{
                    fontWeight: "bold",
                    color:
                        targetPlayerRank === "1st" ? "var(--range--color--01)" :
                        targetPlayerRank === "2nd" ? "var(--range--color--02)" :
                        targetPlayerRank === "3rd" ? "var(--range--color--03)" :
                                                     "var(--range--color--04)"
                }}>
                    { targetPlayerTitle }{" "}
                </span>

                { targetPlayerName }{" "}

                <span style={{
                    fontWeight: "bold",
                    color:
                        targetPlayerRank === "1st" ? "var(--range--color--01)" :
                        targetPlayerRank === "2nd" ? "var(--range--color--02)" :
                        targetPlayerRank === "3rd" ? "var(--range--color--03)" :
                                                     "var(--range--color--04)"
                }}>
                    { getPrefix(targetPlayerId) }{" "}
                </span>

                { playerSecondName }
            </h2>
        </div>
    )
}
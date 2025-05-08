import { sanitize } from "../../utils/sanitize"

export const InfoAstrology = ({ playerAstrology }) => {

    return (
        <div className={"info__item"}>
            <h4 className="inline-heading">Astrology:</h4>
            <div dangerouslySetInnerHTML={{ __html: sanitize(playerAstrology) }} />
        </div>
    )
}
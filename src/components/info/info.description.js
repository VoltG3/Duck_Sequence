import { sanitize } from "../../utils/sanitize"

export const InfoDescription = ({ playerDescription }) => {

    return (
        <div className={"info__items"}>
            <h4 className="inline-heading">Description:</h4>
            <div dangerouslySetInnerHTML={{ __html: sanitize(playerDescription) }} />
        </div>
    )
}
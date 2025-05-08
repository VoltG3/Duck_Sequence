import { sanitize } from "../../utils/sanitize"

export const InfoTemplateText = ({ chapterHeader, chapterContent }) => {

    return (
        <div className={"info__item"}>
            <div className={"info__item__header"}>
                <h4 className="inline-heading">{ chapterHeader }</h4>
            </div>

            <div dangerouslySetInnerHTML={{ __html: sanitize(chapterContent) }} />
        </div>
    )
}
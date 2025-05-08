
export const InfoTemplateAwards = ({ chapterHeader, chapterContent }) => {

    return (
        <div className={"info__item"}>
            <div className={"info__item__header"}>
                <h4 className="inline-heading">{ chapterHeader }</h4>
            </div>

            <div>
                <p>{ chapterContent }</p>
            </div>
        </div>
    )
}
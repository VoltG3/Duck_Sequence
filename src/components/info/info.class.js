

export const InfoClass = ({ playerClass }) => {

    return (
        <div className={"info__item"}>
            <span className="inline-heading">Class:</span>
            <p>{ playerClass }</p>
        </div>
    )
}
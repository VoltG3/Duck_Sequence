

export const InfoAwards = ({ playerAwards }) => {

    return (
        <div className={"info__items"}>
            <span className="inline-heading">Awards:</span>
            <p>{ playerAwards }</p>
        </div>
    )
}
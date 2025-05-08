

export const InfoRace = ({ playerRace }) => {

    return (
        <div className={"info__items"}>
            <span className="inline-heading">Race:</span>
            <p>{ playerRace }</p>
        </div>
    )
}
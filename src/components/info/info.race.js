

export const InfoRace = ({ playerRace }) => {

    return (
        <div className={"info__item"}>
            <span className="inline-heading">Race:</span>
            <p>{ playerRace }</p>
        </div>
    )
}
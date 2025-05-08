

export const InfoSkills = ({ playerSkills }) => {

    return (
        <div className={"info__item"}>
            <span className="inline-heading">Starting Skills:</span>
            <p>{ playerSkills[0] }, {" "} { playerSkills[1] }</p>
        </div>
    )
}
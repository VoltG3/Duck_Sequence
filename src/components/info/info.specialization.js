import { sanitize } from "../../utils/sanitize"

export const InfoSpecialization = ({ playerSpecialization }) => {

    return (
        <div className={"info__item"}>
            <span className="inline-heading">Specialization:</span>
            <p>{ sanitize(playerSpecialization) }</p>
        </div>
    )
}
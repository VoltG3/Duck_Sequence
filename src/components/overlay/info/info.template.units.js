
export const InfoTemplateUnits = ({ unitsNames, unitsIcons }) => {

    return (
        <div className={"info__item"}>
            <div className={"info__item__header"}>
                <h4 className="inline-heading">Units:</h4>
            </div>

            <ul>
                <li>
                    <p className={"inline-p"}>{ unitsIcons[1]}</p>
                    <p className={"inline-p"}>{ unitsNames[0] }</p><
                    /li>
                <li>
                    <p className={"inline-p"}>{ unitsIcons[2]}</p>
                    <p className={"inline-p"}>{ unitsNames[1] }</p>
                </li>
                <li>
                    <p className={"inline-p"}>{ unitsIcons[3]}</p>
                    <p className={"inline-p"}>{ unitsNames[2] }</p>
                </li>
            </ul>
        </div>
    )
}
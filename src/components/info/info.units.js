

export const InfoUnits = ({ playerUnitIcons, playerUnitNames }) => {

    return (
        <div className={"info__items"}>
            <h4 className="inline-heading">Units:</h4>
            <ul>
                <li>
                    <p className={"inline-p"}>{ playerUnitIcons[1]}</p>
                    <p className={"inline-p"}>{ playerUnitNames[0] }</p><
                    /li>
                <li>
                    <p className={"inline-p"}>{ playerUnitIcons[2]}</p>
                    <p className={"inline-p"}>{ playerUnitNames[1] }</p>
                </li>
                <li>
                    <p className={"inline-p"}>{ playerUnitIcons[3]}</p>
                    <p className={"inline-p"}>{ playerUnitNames[2] }</p>
                </li>
            </ul>
        </div>
    )
}
import { StyledButtonSettings as ButtonSettings } from "./styled.settings"
import { useEffect, useState } from 'react'
import { storeActions } from "../../redux/actions"
import { useDispatch } from "react-redux"

export const ButtonSettingsAudio = () => {
    const [enabled, setEnabled] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(storeActions("settings_allow_audio", enabled))
    })

    const handleClick = () => {
        setEnabled(!enabled)
    }

    return (
        <ButtonSettings>
            <p>Audio</p>
            <div
                className={`square ${enabled ? "on" : "off"}`}
                onClick={() =>handleClick()}
            >
                { enabled ? "ON" : "OFF" }
            </div>
        </ButtonSettings>
    )
}
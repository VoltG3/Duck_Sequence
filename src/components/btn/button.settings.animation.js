import {useEffect, useState} from 'react';
import styled from "styled-components"
import {useDispatch} from "react-redux";
import {storeActions} from "../../redux/actions";

const StyledButtonSettingsAnimation = styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px white;
    
    & p {
        margin-left: 10px;
        margin-right: 10px;
    } 
    
    & p:hover {
        color: yellow;
    }

    .square {
        width: 35px;
        height: 30px;
        background-color: #f44336; 
        color: white;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        //border-radius: 6px;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .square.on {
        background-color: #4caf50;
    }

    .square:hover {
        color: yellow;
    }
`

export const ButtonSettingsAnimation = () => {
    const [enabled, setEnabled] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(storeActions("settings_allow_animation", enabled))
    })

    const handleClick = () => {
        setEnabled(!enabled)
    }

    return (
        <StyledButtonSettingsAnimation>
            <p>Animation</p>
            <div
                className={`square ${enabled ? "on" : "off"}`}
                onClick={() =>handleClick()}
            >
                { enabled ? "ON" : "OFF" }
            </div>
        </StyledButtonSettingsAnimation>
    )
}
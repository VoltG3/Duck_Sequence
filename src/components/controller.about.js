import styled from "styled-components"
import {InfoTemplateName} from "./info/info.template.name";
import {InfoTemplateText} from "./info/info.template.text";
import {InfoTemplateUnits} from "./info/info.template.units";
import {InfoTemplateAwards} from "./info/info.template.awards";
import {useDispatch, useSelector} from "react-redux";
import {storeTargetAbout, storeTargetAudio} from "../redux/actions";

const StyledAbout = styled.div`
    position: absolute;
    display: ${({$visible}) => ($visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    z-index: 3;
    border-radius: 10px;
    box-shadow: 
            4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */ 
            0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
    background-color: #5ebc5e;

    .innerInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 600px;
        width: 100%;
        padding: calc(var(--space) * 2);
        margin: 5px;
        border-radius: 10px;
        border: solid 1px var(--color--primary);
    }
`

export const AboutController = () => {
    const targetAbout = useSelector(state => state.target_about)
    const dispatch = useDispatch()

    const isVisible = targetAbout !== false

    const onHandle = () => {
        dispatch(storeTargetAbout(false))
        dispatch(storeTargetAudio("play_audio_button", true))
        console.log("[ info     CLOSE ] - BTN target sect.  about", false)
    }

    return (
        <StyledAbout $visible={ isVisible }>
            <div className="innerInfo">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 2)" }}>
                    <button onClick={() => onHandle()}>Close</button>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </StyledAbout>
    )
}
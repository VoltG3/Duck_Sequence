import styled from "styled-components"
import { InfoName } from "./info/info.name"
import { InfoClass } from "./info/info.class"
import { InfoSpecialization } from "./info/info.specialization"
import { InfoSkills } from "./info/info.skills"
import { InfoUnits } from "./info/info.units"
import { InfoDescription } from "./info/info.description"
import { InfoRace } from "./info/info.race"
import { InfoAstrology } from "./info/info.astrology"
import { InfoAwards } from "./info/info.awards"
import { useDispatch, useSelector } from "react-redux"
import { storeTargetPlayer } from "../redux/actions"

const StyledInfo = styled.div`
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
        padding: calc(var(--space) * 2);
        margin: 5px;
        border-radius: 10px;
        border: solid 1px var(--color--primary);
        
        > .info__item:nth-child(1) { padding-bottom: var(--space); }    /* Name */
        > .info__item:nth-child(2) {                               }    /* Close :btn */
        > .info__item:nth-child(3) {                               }    /* Specialization */
        > .info__item:nth-child(4) { padding-bottom: var(--space); }    /* Class */
        > .info__item:nth-child(5) { padding-bottom: var(--space); }    /* Units */
        > .info__item:nth-child(6) { padding-bottom: var(--space); }    /* Descriptions */
        > .info__item:nth-child(7) { padding-bottom: var(--space); }    /* Race */
        > .info__item:nth-child(8) { padding-bottom: var(--space); }    /* Astrology */
        > .info__item:nth-child(9) {                               }    /* Awards */
    }

    .info__item {
        display: flex;
        flex-direction: row;
        border: solid 1px red;

        & p {
            font-size: 18px;
            color: var(--color--primary);
        }

        h4 {
            padding-right: 7px;
        }
    }

    .info__item {
        display: flex;
        flex-direction: row;
        border: solid 1px red;

        & p {
            font-size: 18px;
            color: var(--color--primary);
        }

        h4 {
            padding-right: 7px;
        }
    }

    .inline-heading {
        font-size: 18px;
        font-weight: bold;
        display: inline;
        margin-right: 6px;
        color: var(--color--primary);
    }

    .inline-p {
        display: inline;
        margin-right: 10px; 
    }

    .code {
        font-family: 'Courier New', Courier, monospace;
        //background-color: #f6f8fa;
        font-weight: bold;
        //color: #3d4249;
        color: #5e5e05;
        //padding: 0.2em 0.4em;
        margin: 0;
        font-size: 21px;
        border-radius: 6px;
    }
`

export const InfoController = () => {
    const targetPlayer = useSelector(state => state.target_player)
    const targetPlayerDescription = useSelector(state => state.player_descriptions[targetPlayer])
    const dispatch = useDispatch()

    const onHandle = () => {
        dispatch(storeTargetPlayer(""))
        console.log("[ info     CLOSE ] - BTN target player NULL ", "")
    }

    const isVisible = targetPlayer !== ""
    if (!targetPlayerDescription) return null

    //console.log("[ info component ] - GET player ID          ", targetPlayer, targetPlayerDescription)
    //console.log("[ info component ] - GET record by ID       ", targetPlayerDescription)

    return (
        <StyledInfo $visible={ isVisible }>
            <div className="innerInfo">
                <div className={"info__item"} style={{ justifyContent: "space-between", width: "100%" }}>
                    <InfoName playerName={ targetPlayerDescription.name } />
                    <button onClick={() => onHandle()}>Close</button>
                </div>

                <InfoClass playerClass={ targetPlayerDescription.class } />
                <InfoSpecialization playerSpecialization={ targetPlayerDescription.specialization } />
                <InfoSkills playerSkills={ targetPlayerDescription.startingSkills } />
                <InfoUnits playerUnitIcons={ targetPlayerDescription.icons } playerUnitNames={ targetPlayerDescription.units } />
                <InfoDescription playerDescription={ targetPlayerDescription.description } />
                <InfoRace playerRace={ targetPlayerDescription.race } />
                <InfoAstrology playerAstrology={ targetPlayerDescription.astrology } />
                <InfoAwards playerAwards={ targetPlayerDescription.icons[0] } />
            </div>
        </StyledInfo>
    )
}
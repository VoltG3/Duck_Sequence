import styled from "styled-components"
import { InfoTemplateName } from "./info/info.template.name"
import { InfoTemplateText } from "./info/info.template.text"
import { InfoTemplateUnits } from "./info/info.template.units"
import { InfoTemplateAwards } from "./info/info.template.awards"
import { useDispatch, useSelector } from "react-redux"
import {
    storeTargetPlayer,
    storeTargetPlayerCount, storeTargetPlayerName,
    storeTargetPlayerRank,
    storeTargetPlayerTitle
} from "../redux/actions"

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
        width: 100%;
        padding: calc(var(--space) * 2);
        margin: 5px;
        border-radius: 10px;
        border: solid 1px var(--color--primary);
    }
    
    .info__item {
        display: flex;
        flex-direction: row;
        //border: solid 1px red;
        width: 100%;
        //padding-bottom: 5px;

        & p {
            font-size: 18px;
            color: var(--color--primary);
        }
        
        .info__item__header {
            min-width: 80px;
            max-width: 80px;
            width: 100%;
            //border: solid 1px black;
        }

        .info__item__content {
            width: auto;

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
    const hero = useSelector(state => state.player_descriptions[targetPlayer])
    const dispatch = useDispatch()

    const onHandle = () => {
        dispatch(storeTargetPlayer(""))
        dispatch(storeTargetPlayerName(""))
        dispatch(storeTargetPlayerRank(""))
        dispatch(storeTargetPlayerTitle(""))
        dispatch(storeTargetPlayerCount(0))
        console.log("[ info     CLOSE ] - BTN target player NULL ", "")
        console.log("[ info     CLOSE ] - BTN target player name ", "")
        console.log("[ info     CLOSE ] - BTN target player rank ", "")
        console.log("[ info     CLOSE ] - BTN target player title", "")
        console.log("[ info     CLOSE ] - BTN target player count", 0)
    }

    const isVisible = targetPlayer !== ""
    if (!hero) return null

    //console.log("[ info component ] - GET player ID          ", targetPlayer, targetPlayerDescription)
    //console.log("[ info component ] - GET record by ID       ", targetPlayerDescription)

    return (
        <StyledInfo $visible={ isVisible }>
            <div className="innerInfo">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 2)" }}>
                    <InfoTemplateName playerId={ hero.id } playerSecondName={ hero.name } />
                    <button onClick={() => onHandle()}>Close</button>
                </div>

                <InfoTemplateText chapterHeader={"Class"} chapterContent={ hero.class } />
                <InfoTemplateText chapterHeader={"Perk"} chapterContent={ hero.perk } />
                <InfoTemplateText chapterHeader={"Trait"} chapterContent={ hero.trait } />
                <InfoTemplateText chapterHeader={"Bonus"} chapterContent={ hero.bonus } />
                <InfoTemplateText chapterHeader={"Role"} chapterContent={ hero.role } />
                <InfoTemplateText chapterHeader={"Edge"} chapterContent={ hero.edge } />
                <InfoTemplateText chapterHeader={"Race"} chapterContent={ hero.race } />
                <InfoTemplateText chapterHeader={"Skills"} chapterContent={ hero.skills } />
                <InfoTemplateUnits unitsNames={ hero.units } unitsIcons={ hero.icons } />
                <InfoTemplateText chapterHeader={"About"} chapterContent={ hero.about } />
                <InfoTemplateText chapterHeader={"Fate"} chapterContent={ hero.fate} />
                <InfoTemplateAwards chapterHeader={"Awards"} chapterContent={ hero.icons[0]} />
            </div>
        </StyledInfo>
    )
}
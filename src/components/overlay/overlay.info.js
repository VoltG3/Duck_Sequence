import { StyledOverlayContainer as OverlayContainer} from "./overlay.styles"
import { StyledOverlay as Overlay } from "./overlay.styles"
import { InfoTemplateName } from "./info/info.template.name"
import { InfoTemplateText } from "./info/info.template.text"
import { InfoTemplateUnits } from "./info/info.template.units"
import { InfoTemplateAwards } from "./info/info.template.awards"
import {ButtonOverlayCloseInfo} from "../btn/button.overlay.close.info";
import { useSelector } from "react-redux"
import {useContext} from "react";
import {DataContext} from "../../data_context/DataContext";


export const OverlayInfo = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const { descriptionsData : playerDescription } = useContext(DataContext)
    const targetPlayer = useSelector(state => state.actions.active_player)

    const hero = playerDescription?.find(p => p.id === targetPlayer) || null;
    if (!targetPlayer || !hero) return null;

    const isVisible = targetPlayer !== false
    if (!hero) return null

    if (!isDataLoaded) {
        return <p>Loading dates…</p>
    }

    console.log("hero", targetPlayer)

    return (
        <OverlayContainer $visible={ isVisible }>
            <Overlay>
                <div className="innerOverlay">
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 1)" }}>
                        {/*<InfoTemplateName playerId={ hero.id } playerSecondName={ hero.name } />*/}
                        <ButtonOverlayCloseInfo />
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
                    {/*<InfoTemplateAwards chapterHeader={"Awards"} chapterContent={ hero.icons[0]} />*/}
                </div>
            </Overlay>
        </OverlayContainer>
    )
}
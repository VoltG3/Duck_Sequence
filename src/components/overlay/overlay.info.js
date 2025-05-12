import { StyledOverlay as Overlay } from "./overlay.styles"
import { InfoTemplateName } from "./info/info.template.name"
import { InfoTemplateText } from "./info/info.template.text"
import { InfoTemplateUnits } from "./info/info.template.units"
import { InfoTemplateAwards } from "./info/info.template.awards"
import { BtnCloseOverlay } from "../btn/button.overlay.close"
import { useSelector } from "react-redux"

export const OverlayInfo = () => {
    const targetPlayer = useSelector(state => state.target_player.target_player_id)
    const targetDescription = useSelector(state => state.player_descriptions)

    const hero = targetPlayer && targetDescription
        ? targetDescription[targetPlayer]
        : null

    if (!targetPlayer || !hero) return null;

    const isVisible = targetPlayer !== ""

    if (!hero) return null

    return (
        <Overlay $visible={ isVisible }>
          <div className="innerOverlay">
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 2)" }}>
                  <InfoTemplateName playerId={ hero.id } playerSecondName={ hero.name } />
                  <BtnCloseOverlay closeTargetSection="closeInfoSection" />
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
        </Overlay>
    )
}
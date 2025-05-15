import { StyledOverlayContainer as OverlayContainer} from "./overlay.styles"
import { StyledOverlay as Overlay } from "./overlay.styles"
import { ButtonCloseOverlay } from "../btn/button.overlay.close"
import { useSelector } from "react-redux"
import {useContext} from "react";
import {DataContext} from "../../context/DataContext";

export const OverlayAbout = () => {
    const { aboutData } = useContext(DataContext)
    const targetAbout = useSelector(state => state.actions.visible_overlay_section_about)
    const aboutContent = useSelector(state => state.about)

    const isVisible = targetAbout !== false

    const statisticsTotalSessions = useSelector(state => state.statistics.statistics_total_sessions)
    const statisticsTotalRounds = useSelector(state => state.statistics.statistics_total_rounds)

    const isDataLoaded = useSelector(state => state.isDataLoaded)

        if (!isDataLoaded || !statisticsTotalSessions || !statisticsTotalRounds || !aboutContent) {
            return <p>Loading dates…</p>
        }

        if (!statisticsTotalSessions || !statisticsTotalRounds) {
            return <p>No dates found.</p>
        }

    return (
        <OverlayContainer $visible={ isVisible }>
           <Overlay>
               <div className="innerOverlay">
                   <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 1)" }}>
                       <h2>About</h2>
                       <ButtonCloseOverlay closeTargetSection="closeAboutSection" />
                   </div>

                   <div>
                       <p className={"inline-p"}>Sessions executed:{" "}
                           <span className={"inline-span"}>
                               { statisticsTotalSessions }
                           </span>
                           {" "}Total rounds:{" "}
                           <span className={"inline-span"}>
                               { statisticsTotalRounds }
                           </span>
                       </p>
                   </div>


                   <div className="about-section">
                       {Array.isArray(aboutData) && aboutData.map((lineObj, index) => {
                           const text = Object.values(lineObj)[0];
                           return (
                               <p key={index} className="about-line">
                                   {text}
                               </p>
                           );
                       })}

                   </div>


               </div>
           </Overlay>
        </OverlayContainer>
    )
}
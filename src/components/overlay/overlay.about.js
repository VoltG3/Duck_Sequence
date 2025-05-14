import { StyledOverlayContainer as OverlayContainer} from "./overlay.styles"
import { StyledOverlay as Overlay } from "./overlay.styles"
import { ButtonCloseOverlay } from "../btn/button.overlay.close"
import { useSelector } from "react-redux"

export const OverlayAbout = () => {
    const targetAbout = useSelector(state => state.target_about)
    const aboutContent = useSelector(state => state.about)
    const isVisible = targetAbout !== false

    const statisticsTotalSessions = useSelector(state => state.sessions_statistics.total_sessions)
    const statisticsTotalRounds = useSelector(state => state.sessions_statistics.total_rounds)

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
                       {aboutContent && aboutContent.map((lineObj, index) => {
                           const key = Object.keys(lineObj)[0]
                           const text = lineObj[key]

                           return (
                               <p key={index} className="about-line">
                                   {text}
                               </p>
                           )
                       })}
                   </div>
               </div>
           </Overlay>
        </OverlayContainer>
    )
}
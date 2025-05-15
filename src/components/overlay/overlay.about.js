import { StyledOverlayContainer as OverlayContainer} from "./overlay.styles"
import { StyledOverlay as Overlay } from "./overlay.styles"
import { ButtonOverlayCloseAbout } from "../btn/button.overlay.close.about"
import { useContext } from "react"
import { DataContext } from "../../data_context/DataContext"
import { useSelector } from "react-redux"

export const OverlayAbout = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const { aboutData } = useContext(DataContext)
    const targetAbout = useSelector(state => state.actions.visible_overlay_section_about)

    const isVisible = targetAbout !== false

    const executedSessionsSum = useSelector(state => state.statistics.statistics_total_sessions)
    const executedRoundsSum = useSelector(state => state.statistics.statistics_total_rounds)

    if (!isDataLoaded) {
        return <p>Loading dates…</p>
    }

    return (
        <OverlayContainer $visible={ isVisible }>
           <Overlay>
               <div className="innerOverlay">
                   <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 1)" }}>
                       <h2>About</h2>
                       <ButtonOverlayCloseAbout />
                   </div>

                   <div>
                       <p className={"inline-p"}>Sessions executed:{" "}
                           <span className={"inline-span"}>
                               { executedSessionsSum }
                           </span>
                           {" "}Total rounds:{" "}
                           <span className={"inline-span"}>
                               { executedRoundsSum }
                           </span>
                       </p>
                   </div>

                   <div>
                       {Array.isArray(aboutData) && aboutData.map((lineObj, index) => {
                           const text = Object.values(lineObj)[0]
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
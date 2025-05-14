import { StyledOverlayContainer as OverlayContainer} from "./overlay.styles"
import { StyledOverlay as Overlay } from "./overlay.styles"
import { ButtonCloseOverlay } from "../btn/button.overlay.close"
import { useSelector } from "react-redux"

export const OverlayAbout = () => {
    const targetAbout = useSelector(state => state.target_about)
    const isVisible = targetAbout !== false

    const statisticsTotalSessions = useSelector(state => state.sessions_statistics.total_sessions)
    const statisticsTotalRounds = useSelector(state => state.sessions_statistics.total_rounds)

    const isDataLoaded = useSelector(state => state.isDataLoaded)

        if (!isDataLoaded || !statisticsTotalSessions || !statisticsTotalRounds) {
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

                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
           </Overlay>
        </OverlayContainer>
    )
}
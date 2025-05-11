import { StyledOverlay as Overlay } from "./overlay.styles"
import { BtnCloseOverlay } from "../btn/button.overlay.close"
import { useSelector } from "react-redux"

export const OverlayAbout = () => {
    const targetAbout = useSelector(state => state.target_about)
    const isVisible = targetAbout !== false

        const allDates = useSelector(state => state.player_dates)
        const isDataLoaded = useSelector(state => state.isDataLoaded)

        if (!isDataLoaded || !allDates || Object.keys(allDates).length === 0) {
            return <p>Loading dates…</p>
        }

        const totalCount = allDates.length

        if (totalCount === 0) {
            return <p>No dates found.</p>
        }

    return (
        <Overlay $visible={ isVisible }>
            <div className="innerOverlay">

                <BtnCloseOverlay closeTargetSection="closeAboutSection" />
                <div><p>Duck Sequence:{" "}<span>{ totalCount - 1 }</span></p></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </Overlay>
    )
}
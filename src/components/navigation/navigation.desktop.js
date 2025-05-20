import { NavigationDesktopDates } from "./navigation.desktop.dates"
import { FakeNavigationDates } from "./navigation.desktop.dates.fake"
import { ButtonOpenOverlayAbout } from "../btn/button.overlay.open.about"
import { useSelector} from "react-redux"
import { ButtonSettingsAudio } from "../btn/button.settings.audio"
import { ButtonSettingsAnimation } from "../btn/button.settings.animation"

export const NavigationDesktop = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "auto",
            paddingLeft: "calc(var(--space) * 2)",
            paddingRight: "calc(var(--space) * 2)",
        }}>
            <p style={{ fontSize:"var(--font--size--header)" }}>Duck Sequence</p>

            <div style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "calc(var(--space) * 2)",
                paddingLeft: "calc(var(--space) * 4)",
            }}>
                {!isDataLoaded ? <FakeNavigationDates /> : <NavigationDesktopDates />}
            </div>

            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                width: "auto",
                height: "auto",
                gap: "10px",
            }}>
                <ButtonSettingsAnimation />
                <ButtonSettingsAudio />
                <ButtonOpenOverlayAbout />
            </div>
        </div>
    )
}
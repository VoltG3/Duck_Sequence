import Logo from "./navigation.logo"
import { NavigationDates } from "./navigation.dates"
import { FakeNavigationDates } from "./navigation.dates.fake"
import { ButtonOpenOverlayAbout } from "../btn/button.overlay.open.about"
import { useSelector} from "react-redux"

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
            <Logo />

            <div style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "calc(var(--space) * 2)",
                paddingLeft: "calc(var(--space) * 4)",
            }}>
                {!isDataLoaded ? <FakeNavigationDates /> : <NavigationDates />}
            </div>

            <ButtonOpenOverlayAbout />
        </div>
    )
}
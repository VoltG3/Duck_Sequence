import Logo from "./navigation.logo"
import { NavigationDates } from "./navigation.dates"
import { FakeNavigationDates } from "./navigation.dates.fake"
import { ButtonOpenOverlayAbout } from "../btn/button.overlay.open.about"
import {useDispatch, useSelector} from "react-redux"
import {storeTargetState} from "../../redux/actions";

export const NavigationDesktop = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const dispatch = useDispatch()

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

            <div>
                <button onClick={() => dispatch(storeTargetState("play_animation_level_equal", true)) }>l_equal</button>
                <button onClick={() => dispatch(storeTargetState("play_animation_level_down", true)) }>l_down</button>
                <button onClick={() => dispatch(storeTargetState("play_animation_level_up", true)) }>l_up</button>
                <button onClick={() => dispatch(storeTargetState("sorting_cards", true)) }>sort</button>
                <button onClick={() => dispatch(storeTargetState("sorting_cards_next", true)) }>next</button>
            </div>

            <ButtonOpenOverlayAbout />
        </div>
    )
}
import { CardControllerDynamic } from "../components/controller.card.dynamic"
import {useSelector} from "react-redux";
import {CardControllerStatic} from "../components/controller.card.static";

function SectionContent() {
    const isAnimationAllowed = useSelector(state => state.actions.settings_allow_animation)

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flex: "1"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "auto",
            }}>
                {!isAnimationAllowed ? <CardControllerStatic /> : <CardControllerDynamic />}
            </div>
        </div>
    )
}

export default SectionContent
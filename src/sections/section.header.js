import { NavigationController } from "../components/controller.navigation"

export const SectionHeader = () => {

    return (
        <div style={{
            position: "fixed",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            background: "var(--color--primary)",
            color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
            zIndex: "20"
        }}>
            <NavigationController />
        </div>
    )
}
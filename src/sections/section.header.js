import { useMediaQuery } from "../utils/useMediaQuery"
import { NavigationDesktop } from "../components/navigation/navigation.desktop"
import { NavigationMobile } from "../components/navigation/navigation.mobile"

export const SectionHeader = () => {
    const isMobile = useMediaQuery("(max-width: 768px)")

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
            <>
                { !isMobile
                    ? <NavigationDesktop />
                    : <NavigationMobile />
                }
            </>
        </div>
    )
}
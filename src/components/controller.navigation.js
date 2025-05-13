import { useMediaQuery } from "../utils/useMediaQuery"
import { NavigationDesktop } from "./navigation/navigation.assembly.desktop"
import { NavigationMobile } from "./navigation/navigation.assembly.mobile"

export const NavigationController = () => {
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
        <>
            { !isMobile
                ? <NavigationDesktop />
                : <NavigationMobile />
            }
        </>
    )
}
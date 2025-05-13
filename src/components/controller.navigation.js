import { useMediaQuery } from "../utils/useMediaQuery"
import { NavigationNavDesktop } from "./navigation/navigation.nav.desktop"
import { NavigationNavMobile } from "./navigation/navigation.nav.mobile"

export const NavigationController = () => {
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
        <>
            { !isMobile
                ? <NavigationNavDesktop />
                : <NavigationNavMobile />
            }
        </>
    )
}
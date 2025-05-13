import { useMediaQuery } from "../utils/useMediaQuery"
import { NavigationDesktopController } from "./controller.navigation.desktop"
import { NavigationMobileController } from "./controller.navigation.mobile"

export const NavigationController = () => {
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
        <>
            { !isMobile
                ? <NavigationDesktopController />
                : <NavigationMobileController />
            }
        </>
    )
}
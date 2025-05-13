import Logo from "./navigation.logo"
import { ButtonOpenOverlayAbout } from "../btn/button.overlay.open.about"
import styled from "styled-components";
import {DatesController} from "./navigation.dates";

const T = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
        width: 100%;
        height: auto;
    padding-left: calc(var(--space) * 2);
    padding-right: calc(var(--space) * 2);
    
    .a {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        padding-top: calc(var(--space) * 2);
        padding-left: calc(var(--space) * 2);
        border: solid 1px white;
    }
`

export const NavigationNavDesktop = () => {

    return (
        <T>
            <Logo />

            <div className={"a"}>
                <DatesController />
            </div>

            <ButtonOpenOverlayAbout />
        </T>
    )
}
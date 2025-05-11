import styled from "styled-components"
import { BtnOpenOverlayAbout } from "../components/btn/button.overlay.open.about"
import { DatesController } from "../components/controller.dates"

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: var(--color--primary);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);

    .innerHeader {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        height: auto;
        padding-left: calc(var(--space) * 2);
        padding-right: calc(var(--space) * 2);

        > :nth-child(2) { // Dates Controller
            flex: 1;
            padding: calc(var(--space) * 2) calc(var(--space) * 2) calc(var(--space) / 2) calc(var(--space) * 6);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;

        }
    }

    .header__item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
    }
`

export const SectionHeader = () => {

    return (
        <StyledHeader>
            <div className="innerHeader">
                <div className="header__item">
                    <p style={{ fontSize:"clamp(0.625rem, 3.75vw, 2.188rem)" }}>Duck Sequence</p>
                </div>

                <div className="header__item">
                    <DatesController />
                </div>

                <div className="header__item">
                    <BtnOpenOverlayAbout />
                </div>
            </div>
        </StyledHeader>
    )
}
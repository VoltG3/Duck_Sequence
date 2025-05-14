import styled from "styled-components"
import config from "../../config"

export const StyledOverlayContainer = styled.div`
    position: fixed;
    display: ${({$visible}) => ($visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
        width: 100%;
        height: 100%;
    z-index: 3;
`

export const StyledOverlay = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            width: auto;
            height: auto;
        border-radius: 10px;
        box-shadow:
                4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */
                0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
        background-image: url(${config.background.URL_background_02});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 4;
    
    .innerOverlay {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
            max-width: 600px;
                width: 100%;
        padding: calc(var(--space) * 2);
        margin: 5px;
        border-radius: 10px;
        border: solid 1px var(--color--primary);
    }
    
        .innerOverlay > div:nth-child(2) { margin-bottom: calc(var(--space) * 1); } // Class
        .innerOverlay > div:nth-child(3) { margin-bottom: calc(var(--space) * 1); } // Perk
        .innerOverlay > div:nth-child(4) { margin-bottom: calc(var(--space) * 1); } // Trait
        .innerOverlay > div:nth-child(5) { margin-bottom: calc(var(--space) * 1); } // Bonus
        .innerOverlay > div:nth-child(6) { margin-bottom: calc(var(--space) * 1); } // Role
        .innerOverlay > div:nth-child(7) { margin-bottom: calc(var(--space) * 1); } // Edge
        .innerOverlay > div:nth-child(8) { margin-bottom: calc(var(--space) * 1); } // Race
        .innerOverlay > div:nth-child(9) { margin-bottom: calc(var(--space) * 2); } // Skills
        .innerOverlay > div:nth-child(10) { margin-bottom: calc(var(--space) * 2); } // Units
        .innerOverlay > div:nth-child(11) { margin-bottom: calc(var(--space) * 2); } // About
        .innerOverlay > div:nth-child(12) { margin-bottom: calc(var(--space) * 2); } // Fate
        .innerOverlay > div:nth-child(13) { margin-bottom: calc(var(--space) * 0); } // Awards
    
    .innerInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
            max-width: 600px;
                width: 100%;
        padding: calc(var(--space) * 2);
        margin: 5px;
        border-radius: 10px;
        border: solid 1px var(--color--primary);
    }

    .info__item {
        display: flex;
        flex-direction: row;
        width: 100%;
        
        & h2 {
            font-size: var(--font--size--h2);
        }
        
        & p {
            font-variant: small-caps;
            color: var(--color--primary);
        }

        .info__item__header {
            min-width: 80px;
            max-width: 80px;
            width: 100%;
        }

        .info__item__content {
            width: auto;
        }
    }

    .inline-heading {
        font-weight: bold;
        display: inline;
        margin-right: 6px;
        color: var(--color--primary);
    }

    .inline-p {
        display: inline;
        margin-right: 10px;
    }

    .inline-span {
        font-weight: bold;
        color: red;
    }
    
    .code {
        font-family: 'Courier New', Courier, monospace;
        background-color: #dadddf;
        color: #1e1e1c;
        font-weight: normal;
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 0.95em;
        border-radius: 4px;
        display: inline;
    }

    .unit-icon {
        display: inline-block;
        font-size: 1.5rem;
        transition: transform 0.3s ease, filter 0.3s ease;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        will-change: transform;
    }

    .unit-icon:hover {
        transform: scale(2.5) translateZ(20px);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        z-index: 5;
    }
`
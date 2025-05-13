import styled from "styled-components"
import config from "../../config"

export const StyledOverlay = styled.div`
    position: absolute;
    top: 140px;
    display: ${({$visible}) => ($visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
        height: auto;
        width: auto;
    border-radius: 10px;
    box-shadow: 
            4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */ 
            0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
    
    //background-color: #5ebc5e;
    background-image: url(${config.background.URL_background_02});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 3;

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
        //border: solid 1px red;
        width: 100%;
        //padding-bottom: 5px;

        & p {
            //font-size: 18px;
            color: var(--color--primary);
        }

        .info__item__header {
            min-width: 80px;
            max-width: 80px;
            width: 100%;
            //border: solid 1px black;
        }

        .info__item__content {
            width: auto;
        }
    }

    .inline-heading {
        //font-size: 18px;
        font-weight: bold;
        display: inline;
        margin-right: 6px;
        color: var(--color--primary);
    }

    .inline-p {
        display: inline;
        margin-right: 10px;
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
`
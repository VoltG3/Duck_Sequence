import styled from "styled-components"

export const StyledOverlay = styled.div`
    position: absolute;
    display: ${({$visible}) => ($visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    z-index: 3;
    border-radius: 10px;
    box-shadow:
            4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */
            0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
    background-color: #5ebc5e;

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
`
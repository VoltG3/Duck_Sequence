import styled from "styled-components"
import { CardCrown } from "./card.crown"
import { CardImage } from "./card.image"
import { CardName } from "./card.name"
import { CardRank } from "./card.rank"
import { CardPoints } from "./card.points"
import { BtnOpenOverlayInfo } from "../btn/button.overlay.open.info"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: auto;
    height: auto;
    margin: 10px;
    background-color: var(--card--color--01);
    border-radius: 10px;
    box-shadow:
            4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */
            0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
    overflow: hidden;
`

export const CardAssembly = ({ id, title, name, count, rank }) => {

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "60px",
            }}>
                { rank !== ""
                    ? <CardCrown rank={ rank } />
                    : null
                }
            </div>

            <CardContainer>
                <CardImage id={ id } />

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px"}}>
                    <div style={{
                        flexDirection: "column",
                        width: "100%",
                        height: "auto",
                        marginRight: "10px"}}>

                        <CardName rank={ rank } title={ title } name={ name } />
                        <BtnOpenOverlayInfo id={ id } name={ name } rank={ rank } title={ title } count={ count } />
                    </div>

                    <CardRank rank={ rank } />
                </div>

                <CardPoints count={ count } id={ id } />
            </CardContainer>
        </>
    )
}
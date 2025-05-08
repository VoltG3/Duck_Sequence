import styled from "styled-components"
import { CardImage } from "./card.image"
import { CardName } from "./card.name"
import { CardInfo } from "./card.info"
import { CardRank } from "./card.rank"
import { CardPoints } from "./card.points"

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
                    <CardInfo id={ id } rank={ rank }/>
                </div>

                <CardRank rank={ rank } />
            </div>

           <CardPoints count={ count } />
        </CardContainer>
    )
}
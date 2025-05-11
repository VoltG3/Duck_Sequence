import styled from "styled-components"
import { CardCrown } from "./card.crown"
import { CardImage } from "./card.image"
import { CardName } from "./card.name"
import { CardPoints } from "./card.points"
import { BtnOpenOverlayInfo } from "../btn/button.overlay.open.info"
import { motion } from "framer-motion"
import config from "../../config"

const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    //width: 180px;
    //aspect-ratio: 5 / 7;
    margin: 10px;
    //background-color: var(--card--color--01);
    
    //background-color: lightgray;
    background-image: url(${config.background.URL_background_02});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    border-radius: 10px;
    //box-shadow:
    //        4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */
    //        0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
    overflow: hidden;
    position: relative;
    //transition: box-shadow 0.6s ease, transform 0.6s ease;
`

const CrownContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 60px;
    position: relative;
`

export const CardAssembly = ({ id, title, name, count, rank, isActive }) => {
    return (
        <>
            <CrownContainer
                layout
                style={{ zIndex: isActive ? 10 : 1 }}
                animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? -30 : 0,
                    boxShadow: isActive
                        ? "none"
                        : "none",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                {rank !== "" && <CardCrown rank={rank} />}
            </CrownContainer>

            <CardContainer
                layout
                style={{ zIndex: isActive ? 10 : 1 }}
                animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? -30 : 0,
                    boxShadow: isActive
                        ? "0 20px 40px rgba(0,0,0,0.5)"
                        : "4px 0 6px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.4)",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <CardImage id={id} />

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px",
                    zIndex: isActive ? 10 : 1
                }}>
                    <div style={{
                        flexDirection: "column",
                        width: "100%",
                        height: "auto",
                        marginRight: "10px",
                        zIndex: isActive ? 10 : 1
                    }}>
                        <CardName rank={rank} title={title} name={name} />
                        <BtnOpenOverlayInfo id={id} name={name} rank={rank} title={title} count={count} />
                    </div>
                    {/* <CardRank rank={rank} /> */}
                </div>

                <CardPoints count={count} id={id} rank={rank} />
            </CardContainer>
        </>
    )
}

import styled from "styled-components"
import { motion } from "framer-motion"
import config from "../../../config"

import { CardCrown } from "./card.crown"
import { CardImage } from "./card.image"
import { CardName } from "./card.name"
import { CardPoints } from "./card.points"
import { ButtonOpenOverlayInfo } from "../../btn/button.overlay.open.info"

import { CardAnimations } from "./card.animations"
import {useSelector} from "react-redux";
import {useEffect} from "react";

const CardAssemblyContainer = styled.div`
    position: relative;
    //max-width: 180px;
    //max-height: 300px;
    width: auto;  
    height: auto;
    display: inline-block;
    border: solid 1px black;
    
    // 210 x 402
`

const AnimationContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    pointer-events: none;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
`

const CrownContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 60px;
    position: relative;
`

const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    //width: 180px;
    //aspect-ratio: 5 / 7;
    // 210 x 402
    margin: 10px;
    
    background-image: url(${config.background.URL_background_02});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`

export const Card = ({ id, title, name, count, rank, animation, isActive }) => {
    const isAnimationAllowed = useSelector(state => state.actions.settings_allow_animation)

    return (
        <CardAssemblyContainer>
            <CrownContainer
                layout
                animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? -30 : 0,
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
                <CardImage targetPlayerId={ id } />

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
                        <ButtonOpenOverlayInfo
                            id={ id }
                            rank={ rank }
                            name={ name }
                            title={ title }
                            count={ count }
                        />
                    </div>
                </div>

                <CardPoints count={count} id={id} rank={rank} />
            </CardContainer>

            {isAnimationAllowed ? (
                <>
                    <AnimationContainer>
                        <CardAnimations animation={animation} />
                    </AnimationContainer>
                    <p>{animation}</p>
                    <p>{id}</p>
                </>
            ) : null}


        </CardAssemblyContainer>
    )
}
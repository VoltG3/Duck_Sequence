import { useEffect, useState } from "react"
import config from "../../config"
import { useSelector, useDispatch } from "react-redux"
import {storeTargetState} from "../../redux/actions";


export const LLevelUpAnimation = () => {
    const [frameIndex, setFrameIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const levelUpFrames = Object.values(config.level_up)

    const playAnimation = useSelector(state => state.play_animation_level_up)
    const dispatch = useDispatch()

    console.log("Play Animation:", playAnimation)

    useEffect(() => {
        if (playAnimation) {
            let index = 0
            setIsPlaying(true)

            const interval = setInterval(() => {
                setFrameIndex(index)
                index++

                if (index >= levelUpFrames.length) {
                    clearInterval(interval)
                    setIsPlaying(false)
                    dispatch(storeTargetState(false)) // <- atiestata Redux stāvokli
                }
            }, 80)

            return () => clearInterval(interval)
        }
    }, [playAnimation, levelUpFrames, dispatch])
    console.log("LevelUp Frames:", levelUpFrames)

    return (
        <div style={{
            zIndex: 9999,
            position: "fixed",   // fixed darbojas attiecībā pret viewport
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: isPlaying ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            backgroundColor: "rgba(0,0,0,0)", // Pārredzams fons, var pievienot testam rgba(0,0,0,0.2)
        }}>
            <img
                src={levelUpFrames[frameIndex]}
                alt="Level Up Animation"
                style={{ width: "128px", height: "128px" }}
            />
        </div>
    )

}
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import config from "../../../config"
import { useDispatch, useSelector } from "react-redux"
import { storeTargetState } from "../../../redux/actions"

export const CardAnimations = ({ animation }) => {

    const animationFrames = animation === "animation_level_up"
        ? Object.values(config.level_up)
        : animation === "animation_level_down"
            ? Object.values(config.level_down)
            : Object.values(config.level_equal)


    const [currentFrame, setCurrentFrame] = useState(0)

    const playAnimation = useSelector(state => state.target_state.play_animation_level_down)
    const dispatch = useDispatch()

    useEffect(() => {


        if (playAnimation) {
            let index = 0
            setCurrentFrame(index)
            const interval = setInterval(() => {
                setCurrentFrame(index)
                index++

                if (index >= animationFrames.length) {
                    clearInterval(interval)
                    dispatch(storeTargetState("play_animation_level_down", false))
                }
            }, 80)

            return () => clearInterval(interval)
        }
    }, [playAnimation, dispatch, animation, animationFrames.length])

    return (
        <motion.div
            style={{
                position: "absolute",
                top: "0",
                width: "140px",
                height: "190px",
                zIndex: 18,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {animationFrames.map((frame, index) => (
                <motion.img
                    key={index}
                    src={frame}
                    alt={`Frame ${index}`}
                    style={{
                        display: index === currentFrame ? "block" : "none",
                        width: "100%",
                        height: "100%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
        </motion.div>
    )
}
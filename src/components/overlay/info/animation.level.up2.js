import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import config from "../../../config"
import { useDispatch, useSelector } from "react-redux"
import { storeTargetState } from "../../../redux/actions"

export const LevelUpAnimation2 = () => {
    const levelUpFrames = Object.values(config.level_up)
    const [currentFrame, setCurrentFrame] = useState(0)

    const playAnimation = useSelector(state => state.target_state.play_animation_level_up)
    const dispatch = useDispatch()

    useEffect(() => {
        if (playAnimation) {
            let index = 0
            setCurrentFrame(index)
            const interval = setInterval(() => {
                setCurrentFrame(index)
                index++

                if (index >= levelUpFrames.length) {
                    clearInterval(interval)
                    dispatch(storeTargetState("play_animation_level_up", false))
                }
            }, 80)

            return () => clearInterval(interval)
        }
    }, [playAnimation, levelUpFrames.length, dispatch])

    return (
        <motion.div
            style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid red",
                padding: "1rem",
                margin: "1rem",
                zIndex: 9999,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {levelUpFrames.map((frame, index) => (
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
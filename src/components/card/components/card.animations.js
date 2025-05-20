import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import config from "../../../config"

export const CardAnimations = ({ animation, isActive }) => {
    const [currentFrame, setCurrentFrame] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const animationFrames = animation === "animation_level_up"
        ? Object.values(config.level_up)
        : animation === "animation_level_down"
            ? Object.values(config.level_down)
            : Object.values(config.level_equal)

    useEffect(() => {
        if (!isActive || !animation) return

        let index = 0
        setCurrentFrame(0)
        setIsPlaying(true)

        const interval = setInterval(() => {
            setCurrentFrame(index)
            index++

            if (index >= animationFrames.length) {
                clearInterval(interval)
                setIsPlaying(false)
            }
        }, 80)

        return () => clearInterval(interval)
    }, [animation, isActive])

    if (!isActive || !isPlaying) return null

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
                    transition={{ duration: 0.3 }}
                />
            ))}
        </motion.div>
    )
}
import { useState } from "react"
import config from "../../config"

export const LevelUpAnimation = () => {
    const [frameIndex, setFrameIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const levelUpFrames = Object.values(config.level_up)            // Create an array of all level-up frames

    const startAnimation = () => {
        if (isPlaying) return

        setIsPlaying(true)
        let index = 0

        const interval = setInterval(() => {
            setFrameIndex(index)
            index++

            if (index >= levelUpFrames.length) {
                clearInterval(interval)
                setIsPlaying(false)
            }
        }, 80)
    }

    return (
        <div className="flex flex-col items-center space-y-2">
            <button
                onClick={startAnimation}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
                🎉 Level Up!
            </button>
            {isPlaying && (
                <img
                    src={levelUpFrames[frameIndex]}
                    alt="Level Up Animation"
                    className="w-32 h-32"
                />
            )}
        </div>
    )
}
import config from "../config"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {storeTargetAudio} from "../redux/actions";

export const AudioController = () => {
    const activeAudio = useSelector(state => state.audio)
    const dispatch = useDispatch()

    const playAudio = (url) => {
        const audio = new Audio(url)
        audio.play().catch(error =>
            console.log("[ audio          ] - Audio playback error   ", error)
        )
    }

    useEffect(() => {
        if (!activeAudio) return

        if (activeAudio.play_audio_button === true && activeAudio.play_audio_info === true) {
            playAudio(config.audio.URL_button_01)
            playAudio(config.audio.URL_obelisk_01)
            dispatch(storeTargetAudio("play_audio_button", false))
            dispatch(storeTargetAudio("play_audio_info", false))
            return
        }

        if (activeAudio.play_audio_button === true) {
            playAudio(config.audio.URL_button_01)
            dispatch(storeTargetAudio("play_audio_button", false))
        }

        if (activeAudio.play_audio_info === true) {
            playAudio(config.audio.URL_obelisk_01)
            dispatch(storeTargetAudio("play_audio_info", false))
        }

    }, [activeAudio, dispatch])

    return (
        <button onClick={playAudio}>
            Atskaņot skaņu
        </button>
    )
}
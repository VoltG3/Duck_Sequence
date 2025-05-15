import config from "../config"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storeActions } from "../redux/actions"

export const AudioController = () => {
    const activeAudio = useSelector(state => state.actions)
    const isAudioAllowed = useSelector(state => state.actions.settings_allow_audio)
    const dispatch = useDispatch()

    const infoAudioRef = useRef(null)
    const aboutAudioRef = useRef(null)
    const repeatAudiosRef = useRef([])

    // ******************************************************
    //  Audio that does not override or interrupt each other
    // ******************************************************
    const playInfoAudio = () => {
        if (!isAudioAllowed) return

        if (infoAudioRef.current && !infoAudioRef.current.paused) {
            infoAudioRef.current.pause()
            infoAudioRef.current.currentTime = 0
        }

        const newAudio = new Audio(config.audio.URL_overlay_01)
        newAudio.play().catch(error =>
            console.log("[ audio INFO     ] - Audio playback error   ", error)
        )
        infoAudioRef.current = newAudio
    }

    const playAboutAudio = () => {
        if (!isAudioAllowed) return

        if (aboutAudioRef.current && !aboutAudioRef.current.paused) {
            aboutAudioRef.current.pause()
            aboutAudioRef.current.currentTime = 0
        }

        const newAudio = new Audio(config.audio.URL_overlay_02)
        newAudio.play().catch(error =>
            console.log("[ audio ABOUT    ] - Audio playback error   ", error)
        )
        aboutAudioRef.current = newAudio
    }

    // ****************************************************
    //  Audio that can play over each other asynchronously
    // ****************************************************
    const playAudioRepeat = (url) => {
        if (!isAudioAllowed) return

        const audio = new Audio(url)
        repeatAudiosRef.current.push(audio)
        audio.play().catch(error =>
            console.log("Audio playback error   ", error)
        )
    }

    useEffect(() => {
        if (!activeAudio) return

        if (activeAudio.play_audio_info === true) {
            playInfoAudio()
            dispatch(storeActions("play_audio_info", false))
        }

        if (activeAudio.play_audio_about === true) {
            playAboutAudio()
            dispatch(storeActions("play_audio_about", false))
        }

        if (activeAudio.play_audio_button === true) {
            playAudioRepeat(config.audio.URL_button_01)
            dispatch(storeActions("play_audio_button", false))
        }
    }, [activeAudio, dispatch, isAudioAllowed])

    useEffect(() => {
        if (!isAudioAllowed) {
            // Stop info audio
            if (infoAudioRef.current && !infoAudioRef.current.paused) {
                infoAudioRef.current.pause()
                infoAudioRef.current.currentTime = 0
            }

            // Stop about audio
            if (aboutAudioRef.current && !aboutAudioRef.current.paused) {
                aboutAudioRef.current.pause()
                aboutAudioRef.current.currentTime = 0
            }

            // Stop all repeat audios
            repeatAudiosRef.current.forEach(audio => {
                if (!audio.paused) {
                    audio.pause()
                    audio.currentTime = 0
                }
            })
            repeatAudiosRef.current = []
        }
    }, [isAudioAllowed])

    return null
}
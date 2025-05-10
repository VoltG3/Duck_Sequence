import config from "../config"
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const AudioController = () => {
    const activeAudio = useSelector(state => state.audio)


    const playAudio = (url) => {
        const audio = new Audio(url)
        audio.play().catch(error =>
            console.log("[ audio          ] - Audio playback error   ", error)
        )
    }

    useEffect(() => {
        if (!activeAudio) return

        switch (true) {
            case activeAudio.play_audio_info === true:
                playAudio(config.audio.URL_obelisk_01)
                break

            default: return;
        }
    }, [activeAudio])

    return (
        <button onClick={playAudio}>
            Atskaņot skaņu
        </button>
    );
}
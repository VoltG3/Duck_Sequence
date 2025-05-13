import { useState, useEffect } from 'react'

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        const listener = () => setMatches(media.matches)
        listener();
        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [query])

    return matches
}
import { compareHeroCount } from "./compareHeroCount"

export function handleSessionDateChange(
    playSessionDate,
    playSessionResults,
    prevPlaySessionDateRef,
    prevPlaySessionResultsRef,
    playSessionGradesRef
) {
    if (playSessionDate !== prevPlaySessionDateRef.current) {
        //console.log("Different date, updating cards: prevPlaySessionDate", prevPlaySessionDateRef.current, "currentPlaySessionDate", playSessionDate)

        playSessionGradesRef.current = compareHeroCount(
            playSessionResults,
            prevPlaySessionResultsRef.current,
            playSessionDate,
            prevPlaySessionDateRef.current
        )
        //console.log("Hero count differences:", playSessionGradesRef.current)

        prevPlaySessionDateRef.current = playSessionDate
        prevPlaySessionResultsRef.current = playSessionResults
        //console.log("Updated prevPlaySessionDateRef", prevPlaySessionResultsRef.current)
    }
}
import styled from "styled-components"
import React, {useEffect, useRef, useState} from "react"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { BtnDates } from "./btn/button.dates"

const StyledDatesController = styled.div`
    position: relative;
    display: inline-flex;
    //gap: 0.5rem;
    //padding: 1rem;
    border: solid 1px red;
`
const SlidingBackground = styled(motion.div)`
    position: absolute;
    width: auto;
    height: 35px;
    background: #08e;
    //border-radius: 0.5rem;
    z-index: 3;
`

export const DatesController = () => {
    const timeRecords = useSelector(state => state.player_dates)
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef(null)
    const btnRefs = useRef([])
    const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 })

    useEffect(() => {
        const btn = btnRefs.current[activeIndex]
        const container = containerRef.current

        if (btn && container) {
            const btnRect = btn.getBoundingClientRect()
            const containerRect = container.getBoundingClientRect()
            const left = btnRect.left - containerRect.left
            const width = btnRect.width
            setSliderStyle({ left, width })
        }
    }, [activeIndex, isDataLoaded])

    if (!isDataLoaded || !timeRecords || Object.keys(timeRecords).length === 0) {
        return <p>Loading dates…</p>
    }

    const totalCount = timeRecords.length

    if (totalCount === 0) {
        return <p>No dates found.</p>
    }

    return (
        <StyledDatesController ref={containerRef}>
            <SlidingBackground
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                    left: sliderStyle.left,
                    width: sliderStyle.width
                }}
            />

            {timeRecords.map((tab, i) => (
                <div style={{ border: "none" }}
                    key={tab}
                    ref={el => (btnRefs.current[i] = el)}
                    onClick={() => setActiveIndex(i)}
                >
                    <BtnDates date={ tab } />
                </div>
            ))}
        </StyledDatesController>
    )
}
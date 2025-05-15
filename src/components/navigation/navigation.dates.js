import styled from "styled-components"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ButtonDates } from "../btn/button.dates"
import { useSelector } from "react-redux"

const StyledNavigationDates = styled.div`
    position: relative;
    display: inline-flex;
    margin-bottom: calc(var(--space) / 2);
`
const SlidingBackground = styled(motion.div)`
    position: absolute;
    width: auto;
    height: 30px;
    //background: #08e;
    background: #027FC1;
    z-index: 3;
`

export const NavigationDates = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const sessionDates = useSelector(state => state.player_dates[0])

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

    if (!isDataLoaded || !sessionDates || Object.keys(sessionDates).length === 0) {
        return <p>Loading dates…</p>
    }

    const totalCount = sessionDates.length

    if (totalCount === 0) {
        return <p>No dates found.</p>
    }

    return (
        <StyledNavigationDates ref={containerRef}>
            <SlidingBackground
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                    left: sliderStyle.left,
                    width: sliderStyle.width
                }}
            />

            {sessionDates.map((tab, i) => (
                <div style={{ border: "none" }}
                    key={tab}
                    ref={el => (btnRefs.current[i] = el)}
                    onClick={() => setActiveIndex(i)}
                >
                    <ButtonDates date={ tab } />
                </div>
            ))}
        </StyledNavigationDates>
    )
}
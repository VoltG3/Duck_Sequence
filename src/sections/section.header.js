import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import {storeTargetAudio, storeTargetDate} from "../redux/actions"

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100px;
    background: var(--color--primary);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    
    & p, span {
        font-size: clamp(1.25rem, 5vw, 2.813rem);
        font-variant: small-caps;
    }
    
    & span { 
        color: yellow;
    }
    
    & ul {
        list-style: none;
    }
    
    & li {
        display: inline-block;
        margin-right: var(--space);
    }
`

export const SectionHeader = () => {
    const dispatch = useDispatch()
    const timeRecords = useSelector(state => state.player_dates)
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    if (!isDataLoaded || !timeRecords || Object.keys(timeRecords).length === 0) {
        return <p>Loading dates…</p>
    }

    const totalCount = timeRecords.length

    if (totalCount === 0) {
        return <p>No dates found.</p>
    }

    const handleClick = (item) => {
        dispatch(storeTargetDate(item))
        dispatch(storeTargetAudio("play_audio_button", true))
    }

    return (
        <StyledHeader>
            <p>Duck Sequence:{" "}<span>{ totalCount - 1 }</span></p>

            <ul>
                {timeRecords.map((item, index) => (
                    <li key={`${ item }-${ index }`}>
                        <button
                            style={{

                            }}
                            id={ item }
                            onClick={() => { handleClick(item) }}
                        >
                            { item }
                        </button>
                    </li>
                ))}
            </ul>
        </StyledHeader>
    )
}
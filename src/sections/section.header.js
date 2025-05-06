import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { storeTargetDate } from "../redux/actions"

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
    const timeRecordsObj = useSelector(state => state.dates)
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    if (!isDataLoaded || !timeRecordsObj || Object.keys(timeRecordsObj).length === 0) {
        return <p>Loading dates…</p>
    }

    const timeRecords = Object.keys(timeRecordsObj)
    const totalCount = timeRecords.length

    if (totalCount === 0) {
        return <p>No dates found.</p>
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
                            onClick={() => { dispatch(storeTargetDate(item)) }}
                        >
                            { item }
                        </button>
                    </li>
                ))}
            </ul>
        </StyledHeader>
    )
}
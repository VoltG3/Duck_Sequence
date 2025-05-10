import styled from "styled-components"
import { useSelector } from "react-redux"
import { BtnNavigation } from "../components/btn/button.navigation"
import { BtnOpenOverlayAbout } from "../components/btn/button.overlay.open.about"

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: var(--color--primary);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    
    .innerHeader {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        height: auto;
        border: solid 1px red;
        padding: var(--space);
        
        > :nth-child(2) {  // Dates Navigation
            flex: 1;
            padding-left: calc(var(--space) * 2);
            padding-right: calc(var(--space) * 2);
            display: flex;
            justify-content: flex-start;
            align-items: center; /* This ensures items are aligned horizontally */
            flex-direction: row; /* Ensures the items are laid out in a row */
        }
    }
    
    .header__item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: solid 1px white;
    }
    
    & p, span {
        font-size: clamp(0.625rem, 3.75vw, 2.188rem); // 10px 37.5px 35px
        font-variant: small-caps;
    }
    
    & span { 
        color: yellow;
    }
    
    & ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex; 
        flex-wrap: nowrap; 
        gap: var(--space); 
    }
    
    & li {
        display: inline-flex;
        align-items: center; 
    }
`

export const SectionHeader = () => {
    const timeRecords = useSelector(state => state.player_dates)
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    if (!isDataLoaded || !timeRecords || Object.keys(timeRecords).length === 0) {
        return <p>Loading dates…</p>
    }

    const totalCount = timeRecords.length

    if (totalCount === 0) {
        return <p>No dates found.</p>
    }

    return (
        <StyledHeader>
            <div className="innerHeader">
                <div className="header__item">
                    <p>Duck Sequence</p>
                </div>

                <div className="header__item" style={{ justifyContent: "center" }}>
                    <ul>
                        {timeRecords.map((date, id) => (
                            <li key={`${ date }-${ id }`}>
                                <BtnNavigation date={ date } />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="header__item">
                    <BtnOpenOverlayAbout />
                </div>
            </div>
        </StyledHeader>
    )
}
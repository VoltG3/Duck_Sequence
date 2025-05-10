import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import {storeTargetAbout, storeTargetAudio} from "../redux/actions"
import {BtnNavigation} from "../components/btn/button.navigation";
import {BtnOpenOverlayAbout} from "../components/btn/button.overlay.open.about";

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
    
    .header__row {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
        justify-content: space-between;
        border: solid 1px white;
    }
    
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
            <div className="header__row">
                <div><p>1</p></div>
                <div><p>Duck Sequence</p></div>
                <div>
                    <BtnOpenOverlayAbout />
                </div>
            </div>

            <div className="header__row">
                <ul>
                    {timeRecords.map((date, id) => (
                        <li key={`${ date }-${ id }`}>
                            <BtnNavigation date={ date } />
                        </li>
                    ))}
                </ul>
            </div>
        </StyledHeader>
    )
}
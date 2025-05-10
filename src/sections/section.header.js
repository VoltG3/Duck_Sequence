import styled from "styled-components"
import { useSelector } from "react-redux"
import { BtnNavigation } from "../components/btn/button.dates"
import { BtnOpenOverlayAbout } from "../components/btn/button.overlay.open.about"
import {DatesController} from "../components/controller.dates";

const StyledHeader = styled.div`
    display: flex;
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
        //border: solid 1px red;
        padding: calc(var(--space) * 2);
        
        > :nth-child(2) {  // Dates Navigation
            flex: 1;
            padding-left: calc(var(--space) * 8);
            padding-right: calc(var(--space) * 2);
            display: flex;
            justify-content: flex-start;
            align-items: center; 
            flex-direction: row; 
        }
    }
    
    .header__item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        //border: solid 1px white;
    }

    .header__item__navigation {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        //border: solid 1px yellow;

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
                    <p style={{ fontSize:"clamp(0.625rem, 3.75vw, 2.188rem)" }}>Duck Sequence</p>
                </div>

                <div className="header__item" style={{ justifyContent: "center" }}>
                    <DatesController />
                    {/*
                     <div className={"header__item__navigation"}>
                        <ul>
                            {timeRecords.map((date, id) => (
                                <li key={`${ date }-${ id }`}>
                                    <BtnNavigation date={ date } />
                                </li>
                            ))}
                        </ul>
                    </div>
                    */}

                </div>

                <div className="header__item">
                    <BtnOpenOverlayAbout />
                </div>
            </div>
        </StyledHeader>
    )
}
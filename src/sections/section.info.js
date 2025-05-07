import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { storeTargetDescription } from "../redux/actions"

const StyledInfo = styled.div`
    position: absolute;
    display: ${({$visible}) => ($visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    z-index: 3;
    //border: solid 1px green;
    //backdrop-filter: blur(18px);
    //background-color: rgba(220, 37, 37, 0.1);
    //backdrop-filter: blur(3px);
    border-radius: 10px;
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.6), /* right shadow  */ 0 4px 6px rgba(0, 0, 0, 0.6); /* bottom shadow */
    //background-color: rgba(255, 255, 255, 0.1);
    //border: solid 1px red;
    background-color: #5ebc5e;
    
    .innerInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 600px;
        padding: calc(var(--space) * 2);
        margin: 5px;
        border-radius: 10px;
        border: solid 1px var(--color--primary);

        /* Name *************:** */
        > .info__item:nth-child(1) {
            justify-content: space-between;
            width: 100%;
            padding-bottom: var(--space);
        }
        
        /* Close *************** */
        > .info__item:nth-child(2) {
            
        }
        
        /* Specialization ******** */
        > .info__item:nth-child(3) {
            
        }
        
        /* Class *************** */
        > .info__item:nth-child(4) {
            padding-bottom: var(--space);
        }
        
        /* Units **************** */
        > .info__item:nth-child(5) {
            padding-bottom: var(--space);
            
            & ul, li {
                list-style: none;
                padding: 0;
                margin: 0;
            }
        }
        
        /* Description ********** */
        > .info__item:nth-child(6) {
            padding-bottom: var(--space);
        }
        
        /* Race ***************** */
        > .info__item:nth-child(7) {
            padding-bottom: var(--space);
        }
        
        /* Astrology ************ */
        > .info__item:nth-child(8) {
            padding-bottom: var(--space);
        }
        
        /* Awards *************** */
        > .info__item:nth-child(9) {
            flex-direction: row;
            //border: solid 1px red;
        }
    }

    .info__item {
        display: flex;
        flex-direction: row;
        //border: solid 1px red;
        
        & p {
            font-size: 18px;
            color: var(--color--primary);
        }
        
        h4 {
            padding-right: 7px;
        }
    }

    .inline-heading {
        font-size: 18px;    
        font-weight: bold;
        display: inline;
        margin-right: 6px;
        color: var(--color--primary); /* pēc vajadzības */
    }

    .icon {
        display: inline;
        font-size: 18px;
        margin-right: 10px; /* atstarpe starp p tagiem, ja vajag */
    }
    
    .inline-p {
        display: inline;
        margin-right: 10px; /* atstarpe starp p tagiem, ja vajag */
    }
`

export const SectionInfo = () => {
    const targetKey = useSelector(state => state.target_description)
    const hero = useSelector(state => state.descriptions_list[targetKey])
    const dispatch = useDispatch()

    const onHandle = () => {
        dispatch(storeTargetDescription(""))
        console.log("[ info component ] - target id              ", "null")
    }

    const isVisible = targetKey !== ""

    if (!hero) return null

    console.log("[ info component ] - GET target ID          ", targetKey)
    console.log("[ info component ] - GET record by ID       ", hero)


    return (
        <StyledInfo $visible={ isVisible }>
            <div className="innerInfo">
                <div className={"info__item"}>
                    <h2>{ hero.name }</h2>
                    <button onClick={() => onHandle()}>Close</button>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Class:</span>{ hero.class }</p>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Specialization:</span>{ hero.specialization }</p>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Starting Skills:</span>{ hero.startingSkills[0] }, {" "} { hero.startingSkills[1] }</p>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Units:</span></p>
                    <ul>
                        <li><p className={"inline-p"}><span className={"icon"}>{ hero.icons[1]}</span></p><p className={"inline-p"}>{ hero.units[0] }</p></li>
                        <li><p className={"inline-p"}>{ hero.icons[2]}</p><p className={"inline-p"}>{ hero.units[1] }</p></li>
                        <li><p className={"inline-p"}>{ hero.icons[3]}</p><p className={"inline-p"}>{ hero.units[2] }</p></li>
                    </ul>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Description:</span>{ hero.description }</p>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Race:</span>{ hero.race } </p>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Astrology:</span>{ hero.astrology }</p>
                </div>

                <div className={"info__item"}>
                    <p><span className="inline-heading">Awards:</span>{ hero.icons[0]}</p>
                </div>
                {/* <p>info { targetKey }</p> */}
            </div>
        </StyledInfo>
    )
}
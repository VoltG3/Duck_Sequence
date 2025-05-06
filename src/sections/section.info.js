import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import {storeTargetDescription} from "../redux/actions";

const StyledInfo = styled.div`
    position: absolute;
    display: ${({ $visible }) => ($visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    z-index: 3;
    border: solid 1px green;
    //backdrop-filter: blur(18px);
    //background-color: rgba(220, 37, 37, 0.1);
    background-color: white;
    
    .innerInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 600px;
        padding: calc(var(--space) * 2);
    }
    
    .info__item {
        display: flex;
        flex-direction: row;
        padding-bottom: var(--space);
        border: solid 1px red;
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
                    <h4>{ hero.icons[0] }</h4>
                    <h2>{ hero.name }</h2>
                </div>

                <div className={"info__item"}>
                    <h4>Class:</h4>
                    <p>{ hero.class}</p>
                </div>

                <div className={"info__item"}>
                    <h4>Specialization:</h4>
                    <p>{ hero.specialization }</p>
                </div>

                <div className={"info__item"}>
                    <h4>Starting Skills:</h4>
                    <p>{ hero.startingSkills[0] }, {" "} { hero.startingSkills[1] }</p>
                </div>

                <div className={"info__item"}>
                    <h4>Units:</h4>
                    <ul>
                        <li>{ hero.icons[1]}{ hero.units[0] }</li>
                        <li>{ hero.icons[2]}{ hero.units[1] }</li>
                        <li>{ hero.icons[3]}{ hero.units[2] }</li>
                    </ul>
                </div>

                <div className={"info__item"}>
                    <h4>Description:</h4>
                    <p>{ hero.description }</p>
                </div>

                <div className={"info__item"}>
                    <h4>Race:</h4>
                    <p>{ hero.race }</p>
                </div>

                <div className={"info__item"}>
                    <h4>Astrology:</h4>
                    <p>{ hero.astrology }</p>
                </div>

            <p>info { targetKey }</p>
            <button onClick={() => onHandle()}>Close</button>
            </div>
        </StyledInfo>
    )
}
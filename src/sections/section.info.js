import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import {storeTargetDescription} from "../redux/actions";
import {createAsyncThunk} from "@reduxjs/toolkit";


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
    backdrop-filter: blur(18px);
    background-color: rgba(220, 37, 37, 0.1);
`

export const SectionInfo = () => {
    const getTargetDescription = useSelector(state => state.target_description)
    const getDescriptionById = useSelector(state => state.descriptions_list[getTargetDescription])
    const dispatch = useDispatch()

    const onHandle = () => {
        dispatch(storeTargetDescription(""))
        console.log("[ info component ] - target id              ", "null")
    }

    const isVisible = getTargetDescription !== ""

    if(getTargetDescription !== "") {
        console.log("[ info component ] - GET target ID          ", getTargetDescription)
        console.log("[ info component ] - GET record by ID       ", getDescriptionById)
    }

    return (
        <StyledInfo $visible={ isVisible }>
            <p>info { getTargetDescription }</p>
            <button onClick={() => onHandle()}>Close</button>
        </StyledInfo>
    )
}
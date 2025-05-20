import styled from "styled-components"
import { useSelector } from "react-redux"
import config from "../../../config"
import { useContext } from "react";
import { DataContext } from "../../../data_context/DataContext"

const StyledCardImage = styled.img`
    max-width: 180px;
    min-width: 100px;
    width: auto;
    max-height: 150px;
    min-height: 100px;
    height: auto;
    object-fit: cover;
    margin: 10px;
    border-radius: 10px;
`

export const CardImage = ({ targetPlayerId }) => {
    const { imagesData } = useContext(DataContext)
    const isDataLoaded = useSelector(state => state.isDataLoaded)

    const selectedEntry = imagesData?.find(entry => entry.id === targetPlayerId)

    if (!isDataLoaded) {
        return <p>Loading images</p>
    }


    const targetPlayerImage = selectedEntry             // placeholder immage issue
        ? process.env.PUBLIC_URL + selectedEntry.img_url
        : config.default.URL_placeholder

    return (
        <div>
            <StyledCardImage
                src={ targetPlayerImage }
                alt={`${targetPlayerId}`}
            />
        </div>
    )
}
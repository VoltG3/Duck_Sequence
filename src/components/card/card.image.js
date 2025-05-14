import styled from "styled-components"
import { useSelector } from "react-redux"
import config from "../../config"

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

export const CardImage = ({ id }) => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const playerData = useSelector(state => state.player_data)

    if (!isDataLoaded || typeof playerData !== "object" || Object.keys(playerData).length === 0) {
        return <p>Loading images</p>
    }
    const selectedEntry = playerData[id]
    const targetPlayerImage = selectedEntry
        ? process.env.PUBLIC_URL + selectedEntry.img_url
        : config.default.URL_placeholder

    return (
        <div>
            <StyledCardImage
                src={ targetPlayerImage }
                alt={`${id}`}
            />
        </div>
    )
}
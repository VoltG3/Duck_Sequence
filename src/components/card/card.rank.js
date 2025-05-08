import styled from "styled-components"
import config from "../../config"

const StyledRankImg = styled.img`
    width: 20px;
    height: 60px;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 0 0 14px 14px;
`

export const CardRank = ({ rank }) => {
    const playerRankImg = (rank) => {
        switch(rank) {
            case "1st": return config.rank.URL_rank_04
            case "2nd": return config.rank.URL_rank_03
            case "3rd": return config.rank.URL_rank_02
            case "": return config.rank.URL_rank_01
            default: return null
        }
    }

    return (
        <div style={{ alignSelf: "center" }}>
            <StyledRankImg
                src={ playerRankImg(rank) }
                alt={"rank"}
            />
        </div>
    )
}
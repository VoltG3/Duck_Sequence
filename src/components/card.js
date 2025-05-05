import { StyledCardContainer as CardContainer} from "./style.card.container"
import { StyledCardImage as CardImage } from "./style.card.image"
import { StyledCardContent as CardContent } from "./style.card.content"
import { StyledCardRank as CardRank } from "./style.card.rank"
import { StyledCardCount as CardCount } from "./style.card.count"
import config from "../config"

export const Card = ({ id, name, count, rank, image }) => {

    const getPersonRank = (rank) => {
        switch(rank) {
            case "place_first":
                return config.rank.URL_rank_04;
            case "place_second":
                return config.rank.URL_rank_03;
            case "place_third":
                return config.rank.URL_rank_02;
            case "":
                return config.rank.URL_rank_01;
            default:
                return null;
        }
    }

    const getPersonTitle = (rank) => {
        switch(rank) {
            case "place_first":
                return "Legendary";
            case "place_second":
                return "Epic";
            case "place_third":
                return "Rare";
            case "":
                return "Common";
            default:
                return null;
        }
    }

    return (
        <CardContainer>
            <CardImage
                src={ image }
                alt={`Person ${id}`}
            />

            <CardContent>
                <div className="card__content__info">
                    <div className="card__content__info__name">
                        <p style={{
                            fontWeight: "bold",
                            color: rank === "place_first" ? "var(--range--color--01)" :
                                   rank === "place_second" ? "var(--range--color--02)" :
                                   rank === "place_third" ? "var(--range--color--03)" : "var(--range--color--04)"
                        }}>{ getPersonTitle(rank)}</p>

                        <p>{ name }</p>
                    </div>

                    {/* <p>rank { rank }</p> */}
                </div>

                <div className="card__content__rank">
                    <CardRank
                        src={getPersonRank(rank)}
                        alt={`Person ${id}`}
                    />
                </div>
            </CardContent>

            <CardCount>
                <p>{ count }</p>
            </CardCount>
        </CardContainer>
    )
}
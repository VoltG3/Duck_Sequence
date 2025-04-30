import { StyledCardContainer as CardContainer} from "./style.card.container"
import { StyledCardImage as CardImage } from "./style.card.image"
import { StyledCardContent as CardContent } from "./style.card.content"
import { StyledCardRank as CardRank } from "./style.card.rank"
import { StyledCardCount as CardCount } from "./style.card.count"
import config from "../config"

export const Card = ({ id, name, count, rank }) => {
    const getPersonImage = (id) => {
        switch(Number(id)) {
            case 1: return config.persons.URL_person_01;
            case 2: return config.persons.URL_person_02;
            case 3: return config.persons.URL_person_03;
            case 4: return config.persons.URL_person_04;
            case 5: return config.persons.URL_person_05;
            case 6: return config.persons.URL_person_06;
            case 7: return config.persons.URL_person_07;
            case 8: return config.persons.URL_person_08;
            case 9: return config.persons.URL_person_09;
            case 10: return config.persons.URL_person_10;
            default: return null;
        }
    }

    const getPersonRank = (rank) => {
        switch(rank) {
            case "firstPlace":
                return config.rank.URL_rank_04;
            case "secondPlace":
                return config.rank.URL_rank_03;
            case "thirdPlace":
                return config.rank.URL_rank_02;
            case "":
                return config.rank.URL_rank_01;
            default:
                return null;
        }
    }

    const getPersonTitle = (rank) => {
        switch(rank) {
            case "firstPlace":
                return "Legendary";
            case "secondPlace":
                return "Epic";
            case "thirdPlace":
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
                src={getPersonImage(id)}
                alt={`Person ${id}`}
            />

            <CardContent>
                <div className="card__content__info">
                    <div className="card__content__info__name">
                        <p style={{
                            fontWeight: "bold",
                            color: rank === "firstPlace" ? "var(--range--color--01)" :
                                   rank === "secondPlace" ? "var(--range--color--02)" :
                                   rank === "thirdPlace" ? "var(--range--color--03)" : "var(--range--color--04)"
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
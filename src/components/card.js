import styled from "styled-components"
import config from "../config"

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 200px;
    height: 250px;
    border: 1px solid black;
`

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 auto;
`

const StyledRank = styled.img`
    width: 20px;
    height: 60px;
    object-fit: cover;
    margin: 0 auto;
`

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

    return (
        <StyledCard>
            <StyledImage
                src={getPersonImage(id)}
                alt={`Person ${id}`}
                onError={(e) => {
                    e.target.src = config.persons.URL_person_01;
                }}
            />

            <div>
                <div>
                    <StyledRank
                        src={getPersonRank(rank)}
                        alt={`Person ${id}`}
                        onError={(e) => {
                            e.target.src = config.persons.URL_person_01;
                        }}
                    />
                </div>
                <div>
                    <p>id { id }</p>
                    <p>name { name }</p>
                    <p>count { count }</p>
                    <p>rank { rank }</p>
                </div>
            </div>
        </StyledCard>
    )
}


export const transformPlayerDataNewFields = (data) => {
    return data.map(hero => ({
        ...hero,
        animation_allow: "",
        animation_type: ""
    }))
}

export const transformScoresDataNewFields = (data) => {
    return data.map(entry => {
        const { date, ...rest } = entry

        const heroes = Object.entries(rest).map(([key, value]) => ({
            id: key,
            title: "Uncommon",
            name: value.name,
            count: value.count,
            rank: ""
        }))

        return { date, heroes }
    })
}

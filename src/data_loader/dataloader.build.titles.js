
export const transformScoresDataRankAssigmentTitles = (data) => {
    return data.map(entry => {
        const updateHeroes = entry.heroes.map(hero => {
            if (!hero.rank) return hero

            switch (hero.rank) {
                case "three_times_first": return { ...hero, title: "Mythic" }
                case "1st": return { ...hero, title: "Legendary" }
                case "2nd": return { ...hero, title: "Epic" }
                case "3rd": return { ...hero, title: "Rare" }
                case "0th": return { ...hero, title: "Common" }
                default: return { ...hero, title: "Uncommon"}
            }
        })

        return {
            ...entry,
            heroes: updateHeroes
        }
    })
}
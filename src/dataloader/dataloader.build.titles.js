/**
 * Transforms the title assignment of heroes data based on their rank.
 *
 * This function processes a given array of data, which contains entries with a 'heroes' array.
 * For each hero in the 'heroes' array, the title is updated based on the rank as follows:
 * - If the rank is "1st", the title is set to "Legendary".
 * - If the rank is "2nd", the title is set to "Epic".
 * - If the rank is "3rd", the title is set to "Rare".
 * - If the rank is not one of these or is undefined, the hero's data remains unchanged.
 *
 * @param {Array} data - An array of objects where each object contains a 'heroes' array of hero objects.
 * @returns {Array} A new array with updated hero title assignments based on their rank.
 */

export const transformResultDataTilteAssigment = (data) => {

    return data.map(entry => {
        const updateHeroes = entry.heroes.map(hero => {
            if(!hero.rank) return hero

            switch (hero.rank) {
                case "1st": return {...hero, title: "Legendary"}
                case "2nd": return {...hero, title: "Epic"}
                case "3rd": return {...hero, title: "Rare"}
                default: return hero
            }
        })

        return {
            ...entry,
            heroes: updateHeroes
        }
    })
}
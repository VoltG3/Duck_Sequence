
export const transformResultDataNewFields = (data) => {
    return data.map(entry => {
        const { date, ...rest } = entry;

        const heroes = Object.entries(rest).map(([key, value]) => ({
            id: key,
            name: value.name,
            count: value.count,
            rank: ""
        }));

        return { date, heroes };
    });
}



export const transformPlayerNewFields = (data) => {
   return data.map(hero => ({
       ...hero,
       animation_allow: "",
       animation_type: ""
   }))
}
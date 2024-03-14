import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
        // toggleFavorite: (state, action) => {
        //     const mealId = action.payload
        //     const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === mealId)
        //     if (existingIndex >= 0) {
        //         state.favoriteMeals.splice(existingIndex, 1)
        //     } else {
        //         const meal = state.favoriteMeals.find(meal => meal.id === mealId)
        //         state.favoriteMeals.push(meal)
        //     }
        // }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite
export const removeFavorite = favoritesSlice.actions.removeFavorite

export default favoritesSlice.reducer

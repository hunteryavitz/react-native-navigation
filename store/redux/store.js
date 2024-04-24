import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites'
import collectedReducer from './collected'
import dropsReducer from './drops'

export const store = configureStore({
    reducer: {
        favoriteAnimals: favoritesReducer,
        collectedAnimals: collectedReducer,
        drops: dropsReducer
    }
})

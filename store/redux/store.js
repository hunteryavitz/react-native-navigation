import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites'
import collectedReducer from './collected'
import dropsReducer from './drops'
import inventoryReducer from './inventory'
import xpReducer from './xp'

export const store = configureStore({
    reducer: {
        favoriteAnimals: favoritesReducer,
        collectedAnimals: collectedReducer,
        drops: dropsReducer,
        inventory: inventoryReducer,
        xp: xpReducer
    }
})

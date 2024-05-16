import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites'
import collectedReducer from './collected'
import dropsReducer from './drops'
import inventoryReducer from './inventory'
import stepsReducer from './steps'
import xpReducer from './xp'
import adventureReducer from './adventure'

export const store = configureStore({
    reducer: {
        favoriteAnimals: favoritesReducer,
        collectedAnimals: collectedReducer,
        drops: dropsReducer,
        inventory: inventoryReducer,
        steps: stepsReducer,
        xp: xpReducer,
        adventure: adventureReducer
    }
})

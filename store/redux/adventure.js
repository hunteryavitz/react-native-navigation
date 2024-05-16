import { createSlice } from "@reduxjs/toolkit"

const adventureSlice = createSlice({
    name: 'adventure',
    initialState: {
        currentAdventure: {}
    },
    reducers: {
        setAdventure: (state, action) => {
            state.adventure = action.payload
        },
        clearAdventure: (state) => {
            state.adventure = {}
        }
    }
})

export const setAdventure = adventureSlice.actions.setAdventure
export const clearAdventure = adventureSlice.actions.clearAdventure

export default adventureSlice.reducer

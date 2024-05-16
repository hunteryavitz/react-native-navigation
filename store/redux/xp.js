import { createSlice } from "@reduxjs/toolkit"

const xpSlice = createSlice({
    name: 'xp',
    initialState: {
        xp: 30
    },
    reducers: {
        addXp: (state, action) => {
            state.xp += action.payload
        },
    }
})

export const addXp = xpSlice.actions.addXp

export default xpSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const xpSlice = createSlice({
    name: 'xp',
    initialState: {
        xp: 0
    },
    reducers: {
        addXp: (state, action) => {
            state.xp += action.payload
        },
        // removeXp: (state, action) => {
        //     state.xp -= action.payload
        // },
    }
})

export const addXp = xpSlice.actions.addXp
// export const removeXp = xpSlice.actions.removeXp

export default xpSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const collectedSlice = createSlice({
    name: 'collected',
    initialState: {
        ids: []
    },
    reducers: {
        addCollected: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeCollected: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
    }
})

export const addCollected = collectedSlice.actions.addCollected
export const removeCollected = collectedSlice.actions.removeCollected

export default collectedSlice.reducer

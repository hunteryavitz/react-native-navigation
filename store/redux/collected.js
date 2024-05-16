import { createSlice } from "@reduxjs/toolkit"

const collectedSlice = createSlice({
    name: 'collected',
    initialState: {
        ids: [],
        captured: [],
        collected: []
    },
    reducers: {
        // animal-dto
        addCaptured: (state, action) => {
            state.captured.push(action.payload.id)
        },
        removeCaptured: (state, action) => {
            state.captured.splice(state.captured.indexOf(action.payload.id), 1)
        },

        addCollected: (state, action) => {
            console.log('adding collected', action.payload.id)
            state.collected.push(action.payload.id)
        },
        // removeCollected: (state, action) => {
        //     state.collected.splice(state.ids.indexOf(action.payload.id), 1)
        // },
    }
})

export const addCollected = collectedSlice.actions.addCollected
// export const removeCollected = collectedSlice.actions.removeCollected
export const addCaptured = collectedSlice.actions.addCaptured
export const removeCaptured = collectedSlice.actions.removeCaptured

export default collectedSlice.reducer

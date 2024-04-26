import { createSlice } from "@reduxjs/toolkit"

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1)
        },
    }
})

export const addItem = inventorySlice.actions.addItem
export const removeItem = inventorySlice.actions.removeItem

export default inventorySlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const dropsSlice = createSlice({
    name: 'drops',
    initialState: {
        animalDrops: 99,
    },
    reducers: {
        addAnimalDrop: (state) => {
            state.animalDrops += 1
        },
        removeAnimalDrop: (state) => {
            state.animalDrops -= 1
        },
    }
})

export const addAnimalDrop = dropsSlice.actions.addAnimalDrop
export const removeAnimalDrop = dropsSlice.actions.removeAnimalDrop

export default dropsSlice.reducer

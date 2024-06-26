import { createSlice } from "@reduxjs/toolkit"

const stepsSlice = createSlice({
    name: 'steps',
    initialState: {
        started: [],
        completed: [],
    },
    reducers: {
        // add new step to inProgress
        // startStep: (state, action) => {
        //     state.inProgress.push(action.payload)
        // },
        // move step from inProgress to completed
        // completeStep: (state, action) => {
        //     state.inProgress = state.inProgress.filter(step => step !== action.payload)
        //     state.completed.push(action.payload)
        // },


        updateStep: (state, action) => {
            console.log('updating step', action.payload.id, action.payload.status)
            console.log('started', state.started)
            console.log('completed', state.completed)
            if (action.payload.status === 1) {
                state.started = state.started.filter(step => step !== action.payload.id)
                state.completed.push(action.payload.id)
            } else if (action.payload.status === 0) {
                state.completed = state.completed.filter(step => step !== action.payload.id)
                state.started.push(action.payload.id)
            } else {
                state.started = state.started.filter(step => step !== action.payload.id)
                state.completed = state.completed.filter(step => step !== action.payload.id)
            }
        },

    }
})

export const updateStep = stepsSlice.actions.updateStep

export default stepsSlice.reducer

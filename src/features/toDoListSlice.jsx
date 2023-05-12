import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'AA', content: 'Go', done: false},
    {id: '2', name: 'AB', content: 'do not go', done: false},
]

const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        listAdded(state, action) {
            state.push(action.payload)
        },
        
    }
})

export const { listAdded } = listSlice.actions

export default listSlice.reducer
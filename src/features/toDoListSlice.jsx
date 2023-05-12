import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'AA', content: 'Go'},
    {id: '2', name: 'AB', content: 'do not go'},
]

const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        listAdded(state, action) {
            state.push(action.payload)
        },
        listDeleted(state, action) {
            state.filter((list) => list.id !== action.id)
        }
    }
})

export const { listAdded, listDeleted } = listSlice.actions

export default listSlice.reducer
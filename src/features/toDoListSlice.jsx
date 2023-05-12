import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'lists',
    initialState: [
        {id: '1', name: 'AA', content: 'Go'},
        {id: '2', name: 'AB', content: 'do not go'},
    ],
    reducers: {
        listAdded(state, action) {
            state.push(action.payload)
        },
        listDeleted(state, action) {
            console.log(action.payload)
            return state.filter((list) => list.id !== action.payload)
        }
    }
})

export const { listAdded, listDeleted } = listSlice.actions

export default listSlice.reducer
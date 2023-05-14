import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'lists',
    initialState: [
        {id: '1', name: 'AA', content: 'Go', completed: false},
        {id: '2', name: 'AB', content: 'do not go', completed: false},
    ],
    reducers: {
        listAdded(state, action) {
            state.push(action.payload)
        },
        listDeleted(state, action) {
            return state.filter((list) => list.id !== action.payload)
        },
        listChecked(state, action) {
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo
                }
                console.log(todo.completed)
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        }
    }
})

export const { listAdded, listDeleted,  listChecked } = listSlice.actions

export default listSlice.reducer
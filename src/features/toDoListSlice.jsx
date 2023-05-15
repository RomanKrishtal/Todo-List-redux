import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'lists',
    initialState: [
        {id: '1', name: 'AA', content: 'Go', completed: false, date: new Date().toLocaleDateString('de-DE')},
        {id: '2', name: 'AB', content: 'do not go', completed: false, date: new Date().toLocaleDateString('de-DE')},
    ],
    reducers: {
        listAdded(state, action) {
            state.push(action.payload)
        },
        listDeleted(state, action) {
            return [...state].filter((list) => list.id !== action.payload)
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
        },
        // listSorted(state, action) {
        //     if (state.id) {
        //         return [...state].filter(() => action.payload.completed)
        //     } else {
        //         console.log(state.id)
        //     }
        // },
        readyCheck(state, action) {
            return [...state].filter((list) => list.completed)
        },
        alphabetCheck(state, action) {
            return [...state].sort((a, b) => (a > b) ? 1 : -1)
        },
        timeSort(state, action) {
            return [...state].sort((a, b) => {
                let dateA = a.date;
                let dateB = b.date;
                return dateA > dateB ? 1 : -1;
            })
        },
        resetSort(state, action) {
            return 
        }
    }
})

export const { listAdded, listDeleted,  listChecked, listSorted, readyCheck, alphabetCheck, timeSort, resetSort } = listSlice.actions

export default listSlice.reducer
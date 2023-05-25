import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'lists',
    initialState: [
        {id: '1', name: 'aa', content: 'Go', completed: false, date: new Date().toLocaleDateString('de-DE')},
        {id: '2', name: 'ab', content: 'do not go', completed: false, date: new Date().toLocaleDateString('de-DE')},
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
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        },
        readyCheck(state, action) {
            return [...state].filter((list) => !list.completed)
        },
        alphabetCheck(state, action) {
            const sortByName = key => (a, b) => a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1;
            return state.slice().sort(sortByName('name'))
        },
        timeSort(state, action) {
            return state.slice().sort((a, b) => {
                let dateA = a.date;
                let dateB = b.date;
                return dateA > dateB ? 1 : -1;
            })
        },
        markCompleted(state, action) {
            return state.map((todo) => {
                if (!action.payload) {
                    console.log(action.payload)
                    return {
                        ...todo,
                        completed: !action.payload
                    }
                } else if (action.payload) {
                    console.log(action.payload)
                    return {
                        ...todo,
                        completed: !action.payload
                    }
                }
            })
        }
    }
})

export const { listAdded, 
                listDeleted,  
                listChecked, 
                listSorted, 
                readyCheck, 
                alphabetCheck, 
                timeSort, 
                resetSort, 
                markCompleted } = listSlice.actions

export default listSlice.reducer
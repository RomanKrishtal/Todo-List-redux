import { configureStore } from '@reduxjs/toolkit'
import listReducer from './features/toDoListSlice.jsx'

export default configureStore({
    reducer: {
    lists: listReducer
    }
})
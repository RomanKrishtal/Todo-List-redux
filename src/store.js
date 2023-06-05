import { configureStore } from '@reduxjs/toolkit'
import listReducer from './features/toDoListSlice.jsx'
import darkThemeReducer from './features/darkThemeSlice.jsx'

export default configureStore({
    reducer: {
    lists: listReducer,
    mode: darkThemeReducer,
    }
})
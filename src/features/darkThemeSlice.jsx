import { createSlice } from "@reduxjs/toolkit";

const darkThemeSlice = createSlice({
    name: "mode",
    initialState: {
        darkTheme: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        }
    }
})

export const { toggleTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
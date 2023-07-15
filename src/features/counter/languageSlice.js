import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentLang: "AZ"
}

const langSlice = createSlice(
    {
        name: "language",
        initialState,
        reducers: {
            setCurrentLanguage: (state, action) => {
                state.currentLang = action.payload
            }
        }
    }
)

export const { setCurrentLanguage } = langSlice.actions
export default langSlice.reducer
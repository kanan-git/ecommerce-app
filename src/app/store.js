import { configureStore } from '@reduxjs/toolkit'
import langReducer from '../features/counter/languageSlice'

const store = configureStore({
  reducer: {
    language: langReducer,
  },
})

export default store
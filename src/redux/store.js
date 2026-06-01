import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './jobsSlice.js'
import bookmarksReducer from './bookmarksSlice.js'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    bookmarks: bookmarksReducer,
  },
})

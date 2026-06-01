import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'jobboard.bookmarks'

// Load bookmarks from localStorage (initial state)
const loadInitial = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const persist = (ids) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(ids)) } catch {}
}

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: { ids: loadInitial() },
  reducers: {
    toggleBookmark: (state, action) => {
      const id = action.payload
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((x) => x !== id)
      } else {
        state.ids.push(id)
      }
      persist(state.ids)
    },
  },
})

export const { toggleBookmark } = bookmarksSlice.actions
export default bookmarksSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

// Slice for search, filter, sort, and pagination state
const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    search: '',
    companyFilter: 'All',
    locationFilter: 'All',
    sortBy: 'newest', // newest | salary-high | salary-low
    page: 1,
    perPage: 5,
  },
  reducers: {
    setSearch: (state, action) => { state.search = action.payload; state.page = 1 },
    setCompanyFilter: (state, action) => { state.companyFilter = action.payload; state.page = 1 },
    setLocationFilter: (state, action) => { state.locationFilter = action.payload; state.page = 1 },
    setSortBy: (state, action) => { state.sortBy = action.payload; state.page = 1 },
    setPage: (state, action) => { state.page = action.payload },
  },
})

export const { setSearch, setCompanyFilter, setLocationFilter, setSortBy, setPage } = jobsSlice.actions
export default jobsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const Userslice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoading:false
  },
  reducers: {
   
  },
})

export const {  } = Userslice.actions

export default Userslice.reducer
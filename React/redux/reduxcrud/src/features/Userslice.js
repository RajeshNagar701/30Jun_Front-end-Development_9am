import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const showUser=createAsyncThunk('showUser',async()=>{
  const res=await axios.get(`http://localhost:3000/user`);
  console.log(res.data);
  return res.data;
});

export const insert=createAsyncThunk('insert',async(formvalue)=>{
  const res=await axios.post(`http://localhost:3000/user`,formvalue);
  console.log(res);
});

export const deletedata=createAsyncThunk('deletedata',async(id)=>{
  const res=await axios.delete(`http://localhost:3000/user/${id}`);
  console.log(res);
});

export const updatedata=createAsyncThunk('update',async(id,formvalue)=>{
  console.log(id);
  console.log(formvalue);
  return false;
})

export const Userslice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoading:true
  },
  extraReducers:{
    [showUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
  }
})

export default Userslice.reducer
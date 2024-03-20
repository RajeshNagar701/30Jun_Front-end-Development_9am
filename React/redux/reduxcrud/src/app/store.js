import { configureStore } from "@reduxjs/toolkit";
import Userslice from "../features/Userslice";
import Adminslice from "../features/Adminslice";


export default configureStore({
    reducer:{
      user:Userslice,
      admin:Adminslice  
    },   
})

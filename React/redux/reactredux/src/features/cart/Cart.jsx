import React from 'react'
 //by useSelector you can access all slice states 
 // by useDispacth you can access all action from slice
import { useDispatch, useSelector } from 'react-redux' 
import { plus,minus,change } from './cartSlice';



function Cart() {

  const {name,number}=useSelector((state)=>state.cart) ;   
  const dispatch=useDispatch();  
  

  return (
    <div>
        <button onClick={()=>dispatch(change())}>Change</button>
        <h1>Hi i am {name} from cartSlice</h1>
        <button onClick={()=>dispatch(plus())}>+</button>
            <h1>{number}</h1>
        <button onClick={()=>dispatch(minus())}>-</button>
    </div>
  )
}

export default Cart
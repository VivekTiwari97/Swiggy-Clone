import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  } catch (error) {
    console.error('Error loading cart from local storage:', error);
    return undefined;
  }
};

// Save cart items to local storage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (error) {
    console.error('Error saving cart to local storage:', error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: loadCartFromLocalStorage() || []
  },

  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
      saveCartToLocalStorage(state.item)
    },

    decrement:(state ,action)=>{
      state.item=state.item.length-1
    },
    removeItem: (state, action) => {
      console.log("state",state,action.payload);
      state.item= state.item.filter((item)=>item.card.info.id !== action.payload)
      saveCartToLocalStorage(state.item)
      
    },
    clearCart: (state) => {
      
      if (state.item.length>0){
        state.item.length = 0;
        saveCartToLocalStorage(state.item)
        toast.error("Item Cleared")
      } else if(state.item.length===0){
        toast.warn("No item to Delete")
      }
    },
  },
});

export const {addItem,removeItem,clearCart,decrement} = cartSlice.actions
export default cartSlice.reducer;
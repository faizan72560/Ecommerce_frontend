import { createReducer } from "@reduxjs/toolkit";
const intialState={
  
}


export const ProductReducer = createReducer(intialState, {
    GetProductRequest: (state) => {
      state.loading = true;
    },
    GetProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    GetProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });


  
export const cartReducer = createReducer(intialState, {
  GetCartRequest: (state) => {
    state.loading = true;
  },
  GetCartSuccess: (state, action) => {
    state.loading = false;
    state.cart = action.payload;
  },
 
 
});


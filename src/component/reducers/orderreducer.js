import { createReducer } from "@reduxjs/toolkit";
const intialState={
  
  
}

export const OrderReducer = createReducer(intialState, {
    CREATE_ORDER_REQUEST: (state) => {
      state.loading = true;
    },
    CREATE_ORDER_SUCCESS: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    CREATE_ORDER_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });


  export const GetOrderReducer = createReducer(intialState, {
    GET_ORDER_REQUEST: (state) => {
      state.loading = true;
    },
    GET_ORDER_SUCCESS: (state, action) => {
      state.loading = false;
      state.getorder = action.payload;
      // state.getorder = action.payload;

    },
    GET_ORDER_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });

import { configureStore } from "@reduxjs/toolkit";

interface StateType {};
const initialState = {};

const counterReducer = (state : StateType = initialState) => {
  return state;
};


export const store = configureStore({
  reducer: {
    //exapmle
    counter: counterReducer,
  },
})

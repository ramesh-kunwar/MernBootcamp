import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  add: (state, action) => {
    // console.log(action.payload, "slice add");
    state.push(action.payload);
  },
  remove: (state, action) => {
    return state.filter((item) => item.id !== action.payload);
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatedAddress: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateAddresss: (state, action) => {
      state.updatedAddress = action.payload;
    },
  },
});

export const { updateAddresss } = customerSlice.actions;
export default customerSlice.reducer;

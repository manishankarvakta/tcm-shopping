import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
};

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
        AddToCart:(state,action) => {
            state.cart.push(action.payload)
        }
    },
})
export const {AddToCart} = cartSlice.actions;
export default cartSlice.reducer
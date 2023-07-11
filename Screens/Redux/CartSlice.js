import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
};

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            //console.log(action.payload)
            console.log("PayLoad:",action.payload)
            // const newProduct = {
            //     name: action.payload.name,
            //     article_code: action.payload.article_code,
            //     tp: action.payload.tp,
            //     mrp: action.payload.mrp,


            // }
            // return{
            // ...state,
            //     newProduct
            // }
        }
    },
})
export const {addToCart} = cartSlice.actions;
export default cartReducer =  cartSlice.reducer
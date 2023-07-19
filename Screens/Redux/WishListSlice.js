import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  FavoritesProducts: [

]};

const WishListSlice = createSlice ({
    name: "Wishlist",
    initialState,
    reducers:{
        addFavoriteProduct: (state, action) => {
            const item = action.payload;
            const FavoritesProduct = {
              id: item._id,
              priceId: item.priceList[0]._id,
              name: item.name,
              article_code: item.article_code,
              ean: item.ean,
              mrp: item.priceList[0].mrp,
              qty: 1,
              tp: item.priceList[0].tp,
              vat: 0,
              unit: item.unit,
              supplier: item.priceList[0].supplier,
              order: 1,
              photo: item.photo,
            };
          
            console.log(FavoritesProduct);
          
            return {
              ...state,
              FavoritesProducts: [...state.FavoritesProducts, FavoritesProduct],
            };
          }
          
    },
})
export const {addFavoriteProduct} = WishListSlice.actions;
export default WishReducer =  WishListSlice.reducer
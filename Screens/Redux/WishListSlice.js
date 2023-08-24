import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "favorites",
  initialState: {
    FavoritesProducts: [], // Initial state with an empty array
  },
  reducers: {
    addFavoriteProduct: (state, action) => {
      const item = action.payload;
      const isAlreadyFavorite = state.FavoritesProducts.some(
        (fi) => fi.id === item._id
      );

      if (isAlreadyFavorite) {
        state.FavoritesProducts = state.FavoritesProducts.filter(
          (fi) => fi.id !== item._id
        );
      } else {
        state.FavoritesProducts.push({
          id: item._id,
          priceId: item?.priceList[0]?._id,
          name: item.name,
          article_code: item.article_code,
          ean: item.ean,
          mrp: item?.priceList[0]?.mrp,
          qty: 1,
          tp: item?.priceList[0]?.tp,
          vat: 0,
          unit: item.unit,
          supplier: item?.priceList[0]?.supplier,
          order: 1,
          photo: item.photo,
        });
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.FavoritesProducts = state.FavoritesProducts.filter(
        (item) => item.id !== productId
      );
    },
  },
});

// Actions
export const { addFavoriteProduct, removeProduct } = WishListSlice.actions;

// Reducer
export default WishListSlice.reducer;

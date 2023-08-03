import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "favorites",
  initialState: {
    FavoritesProducts: [], // Initial state with an empty array
  },
  reducers: {
    addFavoriteProduct: (state, action) => {
      const item = action.payload;
      // console.log(state.FavoritesProducts);
      // console.log(item);
      let selected = state.FavoritesProducts.find((fi) => fi.id === item._id);
      let rest = state.FavoritesProducts.filter((fi) => fi.id !== item._id);
      let products;

      // console.log("selected", selected);
      // console.log("rest", rest);

      if (selected) {
        products = [...rest];
      } else {
        products = [
          ...rest,
          {
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
          },
        ];
      }

      // Return the updated state object
      return {
        ...state,
        FavoritesProducts: products,
      };
    },
    // other reducers...
  },
});

// Actions
export const { addFavoriteProduct } = WishListSlice.actions;

// Reducer
export default WishListSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import ProductsApi from "../Api/ProductsApi";
import SalesApi from "../Api/SalesApi";
// import  cartReducer  from "../CartSlice";

const Store = configureStore({
  reducer: {
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [SalesApi.reducerPath]: SalesApi.reducer,

    cartReducer,
    WishReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(ProductsApi.middleware)
      .concat(SalesApi.middleware),
});

export default Store;

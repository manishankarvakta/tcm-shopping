import { configureStore } from "@reduxjs/toolkit";
import ProductsApi from "../Api/ProductsApi";
import SalesApi from "../Api/SalesApi";
import cartReducer from "../CartSlice";
import WishReducer from "../WishListSlice";
import CustomerReducer from "../CustomerSlice";
import CustomerApi from "../Api/CustomerApi";

const Store = configureStore({
  reducer: {
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [SalesApi.reducerPath]: SalesApi.reducer,
    [CustomerApi.reducerPath]: CustomerApi.reducer,
    cartReducer,
    WishReducer,
    CustomerReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(ProductsApi.middleware)
      .concat(SalesApi.middleware)
      .concat(CustomerApi.middleware),
});

export default Store;

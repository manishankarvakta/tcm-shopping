import { configureStore } from "@reduxjs/toolkit";
import ProductsApi from "../Api/ProductsApi";
// import  cartReducer  from "../CartSlice";

const Store = configureStore({
  reducer: {
    
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    
    cartReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductsApi.middleware)
  
});

export default Store;
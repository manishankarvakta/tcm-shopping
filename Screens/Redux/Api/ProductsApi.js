import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../../Utility/BaseUrl";
//console.log("BASE_URL,", BASE_URL);
// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    getOfferProducts: builder.query({
      query: () => `/app/product/offer`,
      tagTypes: ["Product"],
    }),
    getPopularProducts: builder.query({
      query: () => `app/product/best-seller`,
      tagTypes: ["Product"],
    }),

    getFlashSales: builder.query({
      query: () => `/app/product/promo-products`,
    }),

    getComboProducts: builder.query({
      query: () => `/app/product/Combo`,
      tagTypes: ["Product"],
    }),

    getBestFeaturedProducts: builder.query({
      query: () => `/app/featured`,
      tagTypes: ["Product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["Products"],
    }),

    getSearchProduct: builder.query({
      query: (q) => `/product/search/${q}`,
      tagTypes: ["Products"],
    }),

    getSimilarProducts: builder.query({
      query: (id) => `/app/product-similar/${id}`,
      tagTypes: ["Products"],
    }),

    getProductsCategory: builder.query({
      query: (id) => `/app/product/category/${id}`,
      tagTypes: ["Category"],
    }),

    getCategoryGroup: builder.query({
      query: (group) => `/app/category/group/${group}`,
      tagTypes: ["Category"],
    }),

    getSubCategory: builder.query({
      query: (mc) => `/app/category/master/${mc}`,
      tagTypes: ["Category"],
    }),

    getProductCategoryId: builder.query({
      query: (_id) => `app/product_category/${_id}`,
      tagTypes: ["Category"],
    }),

    getSkinCareProducts: builder.query({
      query: (_id) => `app/product_category/${_id}`,
      tagTypes: ["Category"],
    }),

    getVegetables: builder.query({
      query: (_id) => `app/product_category/${_id}`,
      tagTypes: ["Category"],
    }),

    getProductDetails: builder.query({
      query: (_id) => `/app/product/${_id}`,
      tagTypes: ["Products"],
    }),
  }),
});

export const {
  useGetOfferProductsQuery,
  useGetPopularProductsQuery,
  useGetComboProductsQuery,
  useGetBestFeaturedProductsQuery,
  useGetSingleProductQuery,
  useGetSearchProductQuery,
  useGetSimilarProductsQuery,
  useGetProductsCategoryQuery,
  useGetCategoryGroupQuery,
  useGetSubCategoryQuery,
  useGetProductCategoryIdQuery,
  useGetProductDetailsQuery,
  useGetFlashSalesQuery,
  useGetSkinCareProductsQuery,
  useGetVegetablesQuery,
} = ProductsApi;
export default ProductsApi;

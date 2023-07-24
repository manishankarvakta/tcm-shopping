import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../../Utility/BaseUrl";

// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    getOfferProducts: builder.query({
      query: () => `/ecom/product/offer`,
      tagTypes: ["Product"],
    }),
    getPopularProducts: builder.query({
      query: () => `/ecom/product/promo-products`,
      tagTypes: ["Product"],
    }),

    getFlashSales: builder.query({
      query: () => `/ecom/product/promo-products`,
    }),

    getComboProducts: builder.query({
      query: () => `/ecom/product/Combo`,
      tagTypes: ["Product"],
    }),

    getBestFeaturedProducts: builder.query({
      query: () => `/ecom/featured`,
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
      query: (id) => `/ecom/product-similar/${id}`,
      tagTypes: ["Products"],
    }),

    getProductsCategory: builder.query({
      query: (id) => `/ecom/product/category/${id}`,
      tagTypes: ["Category"],
    }),

    getCategoryGroup: builder.query({
      query: (group) => `/ecom/category/group/${group}`,
      tagTypes: ["Category"],
    }),

    getSubCategory: builder.query({
      query: (mc) => `/ecom/category/master/${mc}`,
      tagTypes: ["Category"],
    }),

    getProductCategoryId: builder.query({
      query: (_id) => `ecom/product_category/${_id}`,
      tagTypes: ["Category"],
    }),

    getSkinCareProducts: builder.query({
      query: (_id) => `ecom/product_category/${_id}`,
      tagTypes: ["Category"],
    }),

    getVegetables: builder.query({
      query: (_id) => `ecom/product_category/${_id}`,
      tagTypes: ["Category"],
    }),

    getProductDetails: builder.query({
      query: (_id) => `/ecom/product/${_id}`,
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

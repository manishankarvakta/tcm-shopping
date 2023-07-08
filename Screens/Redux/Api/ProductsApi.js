import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from '../../../Utility/BaseUrl'

// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getOfferProducts: builder.query({
      query: () => `/ecom/product/offer`,
    }),
    getPopularProducts: builder.query({
      query: () => `/ecom/product/promo-products`,
    }),

    getComboProducts: builder.query({
      query: () => `/ecom/product/Combo`,
    }),

    getBestSellerProducts: builder.query({
      query: () => `/ecom/product/best-seller`,
    }),

    getBestFeaturedProducts: builder.query({
      query: () => `/ecom/featured`,
    }),



    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ['Products']
    }),

    getSearchProduct: builder.query({
      query: (q) => `/product/search/${q}`,
     
    }),

    getSimilarProducts: builder.query({
      query: (id) => `/ecom/product-similar/${id}`,
     
    }),

    getProductsCategory: builder.query({
      query: (id) => `/ecom/product/category/${id}`,
     
    }),

    getCategoryGroup: builder.query({
      query: (id) => `/ecom/category/group${id}`,
     
    }),


  }),
})


export const {
  useGetOfferProductsQuery,
  useGetPopularProductsQuery,
  useGetComboProductsQuery,
  useGetBestSellerProductsQuery,
  useGetBestFeaturedProductsQuery,
  useGetSingleProductQuery,
  useGetSearchProductQuery,
  useGetSimilarProductsQuery,
  useGetProductsCategoryQuery,
  useGetCategoryGroupQuery,
  
   
   
   } = ProductsApi;
export default ProductsApi;
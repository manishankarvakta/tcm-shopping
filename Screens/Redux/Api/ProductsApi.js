import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from '../../../Utility/BaseUrl'

// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/ecom/product/offer`,
    }),
  }),
})


export const { useGetProductsQuery } = ProductsApi;
export default ProductsApi;
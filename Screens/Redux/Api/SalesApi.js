import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../../Utility/BaseUrl";

export const SalesApi = createApi({
  reducerPath: "salesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Sale"],
  endpoints: (builder) => ({
    addSale: builder.mutation({
      query: (saleData) => ({
        url: "/app/sale",
        method: "POST",
        body: saleData,
      }),
      invalidatesTags: ["Sale"],
    }),

    getSaleById: builder.query({
      query: (id) => `app/sale/details/${id}`,
      invalidatesTags: ["Sale"],
    }),
  }),
});

export const { useAddSaleMutation, useGetSaleByIdQuery } = SalesApi;

export default SalesApi;

// customerLogin: builder.mutation({
//   query: (Customer) => ({
//     url: "/ecom/customer/login",
//     method: "POST",
//     body: Customer,
//   }),
// }),
// customerRegister: builder.mutation({
//   query: (Customer) => ({
//     url: "/ecom/customer/register",
//     method: "POST",
//     body: Customer,
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   }),
// }),

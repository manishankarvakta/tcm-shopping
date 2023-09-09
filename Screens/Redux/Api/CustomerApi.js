import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import BASE_URL from "../../../Utility/BaseUrl";

export const CustomerApi = createApi({
  reducerPath: "CustomerApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Customer"],

  endpoints: (builder) => ({
    customer: builder.query({
      query: (id) => `/app/customer/${id}`,
    }),
    updateCustomerAddress: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/app/customer/address/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Customer"],
    }),
    updateUserInfoUpdates: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/app/customer/address/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const {
  useCustomerQuery,
  useUpdateCustomerAddressMutation,
} = CustomerApi;

export default CustomerApi;

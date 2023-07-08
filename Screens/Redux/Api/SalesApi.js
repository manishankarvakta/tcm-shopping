import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from '../../../Utility/BaseUrl'

export const SalesApi = ({
    reducerPath: "SalesApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagType: ["Sales"],
    endPoints: (builder) => ({
        getSale: builder.Query({
            Query:() => `ecom/sale`
        }),
    })
})

export const { useGetSaleQuery } = SalesApi

export default SalesApi
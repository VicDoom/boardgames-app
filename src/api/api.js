import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3002',
        prepareHeaders: (headers, {getState}) => {
            headers.set('Content-Type', '*');
            headers.set('Accept', '*/*');
            headers.set('Access-Control-Allow-Origin', '*')
        },
        mode: 'cors',
    }),
    endpoints: (build) => ({
        getGoods: build.query({
            query: (arg) => `/${arg.type}`
        })
    })
})

export const { useGetGoodsQuery } = api


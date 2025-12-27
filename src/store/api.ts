import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:5000/api/';

export const api = createApi({
        baseQuery   : fetchBaseQuery({
            baseUrl: 'http://localhost:5000/api/',
            credentials: 'include',
        }),
        tagTypes: ['User'],
        endpoints: (builder) => ({})
});
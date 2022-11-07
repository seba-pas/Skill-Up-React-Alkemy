import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
    reducerPaths: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/',
        prepareHeaders: (headers) => {
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Mjg3LCJyb2xlSWQiOjF9LCJpYXQiOjE2Njc4MzUyNjMsImV4cCI6MTY2NzkyMTY2M30.Om9qAKupHqndi9wlDbGWWtD2JUIKX3veO0xk5DrADBc';
            // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6Mjg3LCJyb2xlSWQiOjF9LCJpYXQiOjE2Njc2MDY4NjgsImV4cCI6MTY2NzY5MzI2OH0.x5cfUC0LyhC5Cz0qMoSuSi_Uf9M4DVHPzEfLo-XDAsg'; este token devolvia error ahi puse arriba el que corresponde al usuario admin@grupo3.com contraseña 123qwe.

            headers.set('authorization', `Bearer ${token}`);

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => '/auth/me'
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`
        }),
        getAccounts: builder.query({
            query: () => '/accounts'
        }),
        getAccount: builder.query({
            query: (id) => `/accounts/${id}`
        }),
        getTransactions: builder.query({
            query: () => '/transactions'
        }),
        getTransaction: builder.query({
            query: (id) => `/transactions/${id}`
        }),
        newAccount: builder.mutation({
            query: ({ money, userId }) => ({
                url: '/accounts',
                method: 'POST',
                body: {
                    money,
                    isBlocked: 'false',
                    userId
                }
            })
        }),
        depositCash: builder.mutation({
            query: ({ id, concept, amount }) => ({
                url: `/accounts/${id}`,
                method: 'POST',
                body: {
                    type: 'topup' || 'payment',
                    concept,
                    amount
                }
            })
        }),
        newExpense: builder.mutation({
            query: ({ id, concept, amount }) => ({
                url: `/accounts/${id}`,
                method: 'POST',
                body: {
                    type: 'topup' || 'payment',
                    concept,
                    amount: amount * -1
                }
            })
        }),
        newTransaction: builder.mutation({
            query: ({ amount, concept, date, accountId, userId, toAccountId }) => ({
                url: '/transactions',
                method: 'POST',
                body: {
                    amount,
                    concept,
                    date,
                    type: 'payment',
                    accountId,
                    userId,
                    toAccountId
                }
            })
        })
    })
});

export const {
    useGetMeQuery,
    useGetUserQuery,
    useGetAccounts,
    useGetAccountQuery,
    useGetTransactionsQuery,
    useGetTransactionQuery,
    useNewAccountMutation,
    useDepositCashMutation,
    useNewExpenseMutation,
    useNewTransactionMutation
} = dataApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UserKey } from '../store/states/user';

export const dataApi = createApi({
    reducerPaths: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/',
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem(UserKey));

            headers.set('authorization', `Bearer ${token.token}`);

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
        getUserAccounts: builder.query({
            query: () => '/accounts/me'
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
                    type: 'topup',
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
                    type: 'payment',
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

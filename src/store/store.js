import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userSlice } from './states/user';
import { dataApi } from './services/dataApi';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
});

setupListeners(store.dispatch);

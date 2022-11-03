import { createSlice } from '@reduxjs/toolkit';
import { clearLocalStorage, persistLocalStorage } from '../../utilities/localStorage.utility';

export const EmptyUserState = {
    name: '',
    id_user: '12312',
    rol: '12312',
    token: '123'
};

export const UserKey = 'user_wallet';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user_wallet')
        ? JSON.parse(localStorage.getItem('user_wallet'))
        : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorage(UserKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorage(UserKey, result);
            return result;
        },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

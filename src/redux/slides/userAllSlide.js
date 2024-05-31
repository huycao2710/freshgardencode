import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
    city: '',
    refreshToken: ''
};

export const userAllSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { fullName = '', email = '', access_token = '', address = '', phone = '', avatar = '', _id = '', isAdmin, city = '', refreshToken = '' } = action.payload;
            state.fullName = fullName;
            state.email = email;
            state.address = address;
            state.phone = phone;
            state.avatar = avatar;
            state.id = _id;
            state.access_token = access_token;
            state.isAdmin = isAdmin;
            state.city = city;
            state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
        },

        resetUser: (state) => {
            state.fullName = '';
            state.email = '';
            state.address = '';
            state.phone = '';
            state.avatar = '';
            state.id = '';
            state.access_token = '';
            state.isAdmin = false;
            state.city = '';
            state.refreshToken = ''
        },
    },
});

export const { updateUser, resetUser } = userAllSlide.actions;

export default userAllSlide.reducer;

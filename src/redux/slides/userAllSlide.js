import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
    city: '',
    isVerified: false,
    verificationToken: ''
}

export const userAllSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name = '', email = '', access_token = '', address = '', phone = '', avatar = '', _id = '', isAdmin, city = '', isVerified, verificationToken = '' } = action.payload
            state.name = name;
            state.email = email;
            state.address = address;
            state.phone = phone;
            state.avatar = avatar;
            state.id = _id;
            state.access_token = access_token;
            state.isAdmin = isAdmin;
            state.city = city;
            state.isVerified = isVerified;
            state.verificationToken = verificationToken;
        },

        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.address = '';
            state.phone = '';
            state.avatar = '';
            state.id = '';
            state.access_token = '';
            state.access_token = false;
            state.city = '';
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userAllSlide.actions

export default userAllSlide.reducer
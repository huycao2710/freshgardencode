import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
}

export const productAllSlide = createSlice({
    name: 'product',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            state.search = action.payload
        },
    },
})

export const { searchProduct } = productAllSlide.actions

export default productAllSlide.reducer
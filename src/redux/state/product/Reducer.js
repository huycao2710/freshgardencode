import {
    DELETE_PRODUCT_SUCCESS,
    FIND_PRODUCTS_FAILURE,
    FIND_PRODUCTS_REQUEST,
    FIND_PRODUCTS_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_TOP_PRODUCTS_REQUEST,
    GET_TOP_PRODUCTS_SUCCESS,
    GET_TOP_PRODUCTS_FAILURE,
  } from "./ActionType";

const initialState = {
    products: {
        content: [],
        totalPages: 0,
    },
    product: null,
    topProducts: [],
    loading: false,
    error: null,
};

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case GET_ALL_PRODUCTS_REQUEST:
        case GET_TOP_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload,
            };
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: {
                    ...state.products,
                    content: state.products.content.filter(product => product.id !== action.payload),
                },
            };
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: { content: action.payload },
            };
        case GET_TOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                topProducts: action.payload,
            };
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case GET_ALL_PRODUCTS_FAILURE:
        case GET_TOP_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
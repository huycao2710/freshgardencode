import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { authReducer } from "./state/auth/Reducer";
import { customerProductReducer } from "./state/product/Reducer";
import { cartReducer } from "./state/cart/Reducer";
import { orderReducer } from "./state/order/Reducer";
import adminOrderReducer from "./state/admin/order/Reducer";
import { categoryReducer } from "./state/category/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
    adminOrder: adminOrderReducer,
    categories: categoryReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))
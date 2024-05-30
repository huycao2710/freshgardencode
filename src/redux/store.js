import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productAllReducer from "./slides/productAllSlide";
import userAllReducer from "./slides/userAllSlide";
import orderAllReducer from "./slides/orderAllSlide";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ['product', 'user']
};

const rootReducer = combineReducers({
    product: productAllReducer,
    user: userAllReducer,
    order: orderAllReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store)
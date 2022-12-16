import {combineReducers, createStore} from 'redux'
import {CartReducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";
import {api} from "../api/api";

export const store = configureStore({
    reducer: combineReducers({
        cart: CartReducer,
        [api.reducerPath]: api.reducer,
    }),
    middleware: (getDefaultMiddleware ) => getDefaultMiddleware().concat(api.middleware)
})
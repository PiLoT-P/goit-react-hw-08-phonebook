import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo/todoSlice';
import authReducer from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

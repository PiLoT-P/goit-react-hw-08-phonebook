import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authOperation";

const initianState = {
    token: null,
    isAuth: false,
    email: null,
    name: null,
    password: null,
    isLoading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initianState,
    reducers: {
        loguot() {
            return initianState;
        },
    },
    extraReducers: (builder) =>{
        builder
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    ...payload,
                    isAuth: true,
                }
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    ...payload,
                    isAuth: true,
                }
            })
            .addMatcher(
            (action) =>
                action.type.startsWith("auth") && action.type.endsWith("/pending"),
            (state) => {
                state.isLoading = true;
            }
            )
            .addMatcher(
            (action) =>
                action.type.startsWith("auth") && action.type.endsWith("/fulfilled"),
            (state) => {
                state.isLoading = false;
                state.error = null;
            }
            )
            .addMatcher(
            (action) =>
                action.type.startsWith("auth") && action.type.endsWith("/rejected"),
            (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }
            );
    }
})


export const { loguot } = authSlice.actions;
export default authSlice.reducer
import { loginUserApi, logoutUserApi, registerUserApi } from '../../services/Swagger';

import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'auth/register',
    async (user, thunkApi) => {
        try {
            const userData = await registerUserApi(user);
            return userData;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user, thunkApi) => {
        try {
            const userData = await loginUserApi(user);
            return userData;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        const {token} = thunkApi.getState().auth;
        try {
            const userData = await logoutUserApi(token);
            return userData;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
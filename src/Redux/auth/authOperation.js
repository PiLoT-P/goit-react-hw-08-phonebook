import { loginUserApi, registerUserApi } from '../../services/Swagger';

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
    'auth/register',
    async (user, thunkApi) => {
        try {
            const userData = await loginUserApi(user);
            return userData;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
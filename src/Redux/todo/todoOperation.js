import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactsApi, getContactsApi, removeContactsApi } from '../../services/Swagger';

export const addTodo = createAsyncThunk(
    'todo/add',
    async (newTodo, thunkApi) => {
        const {token} = thunkApi.getState().auth;
        try {
            const todo = await addContactsApi(newTodo, token);
            return todo;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const getTodo = createAsyncThunk(
    'todo/get',
    async (_, thunkApi) => {
        const {token} = thunkApi.getState().auth;
        try {
            const data = await getContactsApi(token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, { getState }) => {
            const { contacts } = getState().todo;

            if (!contacts.length) return true;
            return false;
        }
    }
)

export const removeTodo = createAsyncThunk(
    'todo/remove',
    async (id, thunkApi) => {
        const {token} = thunkApi.getState().auth;
        try {
            await removeContactsApi(id, token);
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)


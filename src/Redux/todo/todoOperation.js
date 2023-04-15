import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactsApi, getContactsApi, removeContactsApi } from '../../services/Swagger';

export const addTodo = createAsyncThunk(
    'todo/add',
    async (newTodo, thunkApi) => {
        try {
            const todo = await addContactsApi(newTodo);
            return todo;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const getTodo = createAsyncThunk(
    'todo/get',
    async (_, thunkApi) => {
        try {
            const data = await getContactsApi();
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
        try {
            await removeContactsApi(id);
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)


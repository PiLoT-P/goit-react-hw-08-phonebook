import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodo, removeTodo } from "./todoOperation";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
        filter: "",
    },
    reducers: {
        logout() {
            return {
                contacts: [],
                isLoading: false,
                error: null,
                filter: "",
            };
        },
        changeFilter: {
            reducer(state, { payload }) {
                return {
                    ...state,
                    filter: payload,
                }
            },
            prepare(event) {
                return {payload: event.target.value,}
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodo.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts.push(payload);
            })
            .addCase(getTodo.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = payload;
            })
            .addCase(removeTodo.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter((el) => el.id !== payload);
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => { state.isLoading = true; }
            )
            .addMatcher(
                (action) => action.type.startsWith("todo") && action.type.endsWith("/rejected"),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            );
    }
})

export const {changeFilter, logout } = todoSlice.actions;
export default todoSlice.reducer;
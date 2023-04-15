import { createSelector } from "@reduxjs/toolkit";

export const selectorTodo = (state) => state.todo.contacts;
export const selectorFilter = (state) => state.todo.filter;

export const selectorFilterTodo = createSelector(
    [selectorTodo, selectorFilter],
    (todo, filter) => {
        if (filter === '') return todo; 
        return todo.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    }
)
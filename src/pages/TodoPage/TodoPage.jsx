import TodoForm from "components/TodoForm/TodoForm";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter/TodoFilter";

import css from "./TodoPage.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodo } from "Redux/todo/todoOperation";

const TodoPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);

    return (
        <div className={css.main}>
            <h1>Phonebook</h1>
            <TodoForm/>
            <h2>Contacts</h2>
            <TodoFilter/>
            <TodoList/>
        </div>
    );
}

export default TodoPage;
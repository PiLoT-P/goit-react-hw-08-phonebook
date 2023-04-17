import css from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { removeTodo } from "Redux/todo/todoOperation";
import { selectorFilterTodo } from "Redux/todo/todoSelector";

const TodoList = () => {
    const dispatch = useDispatch();
    const filteredTodo = useSelector(selectorFilterTodo);

    return (
        <ul className={css.list}>
            {filteredTodo.map(({id, name, number }) => (
                <li key={id}>
                    <p className={css.text}>{name}: {number}</p>
                    <button className={css.btn} onClick={(e) => dispatch(removeTodo(id))}>
                        Delete
                    </button>
                </li>
            ))
            }
        </ul>
    );
};

export default memo(TodoList);
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "Redux/todo/todoOperation";

import css from "./TodoForm.module.css";

const TodoForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.todo.isLoading);
    const todo = useSelector((state) => state.todo.contacts);
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const hendleChangeName = (event) => {
        const { value } = event.target;
        setName(value);
    }
    const hendleChangeNumber = (event) => {
        const { value } = event.target;
        setPhone(value);
    }

    const hendleSubmit = (event) => {
        event.preventDefault();

        const newTodo = { name, phone };
        let k = 0;

        todo.map((el) => {
            if (el.name.toLowerCase() === name.toLowerCase()) {
                alert(name+' is already in contacts');
                k++;
            }
            return k;
        })
        if (k > 0) {
            return;
        } else {
            dispatch(addTodo(newTodo));
            setName('');
            setPhone('');
        }
    }

    return (
        <>
            <form className={css.form} onSubmit={hendleSubmit}>
                <label >
                    <p className={css.text}>Name</p>
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={hendleChangeName}
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={phone}
                    onChange={hendleChangeNumber}
                    />
                </label>
                <button className={css.btn} type="submit">
                    {isLoading ? "Loading..." : "Add contacts"}
                </button>
            </form>
        </>
    );
}

export default memo(TodoForm);
import { useState } from 'react';
import css from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from 'Redux/auth/authOperation';

const RegisterPage = () => {
    const dispath = useDispatch()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const hendleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        dispath(registerUser(form));
    }

    return (
        <form className={css.login} onSubmit={hendleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="UserName"
                value={form.name}
                onChange={hendleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="UserEmail"
                value={form.email}
                onChange={hendleChange}
            />
            <input
                type="text"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={hendleChange}
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPage;
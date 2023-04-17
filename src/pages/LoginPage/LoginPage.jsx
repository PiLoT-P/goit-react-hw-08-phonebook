import { useState } from 'react';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from 'Redux/auth/authOperation';

const LoginPage = () => {
    const dispath = useDispatch()
    const [form, setForm] = useState({
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
        dispath(loginUser(form));
    }

    return (
        <form className={css.login} onSubmit={hendleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={form.name}
                    onChange={hendleChange}
                    placeholder="UserEmail"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={hendleChange}
                    placeholder="Password"
                />
            <button type="submit">LogIn</button>
        </form>
    );
}

export default LoginPage;
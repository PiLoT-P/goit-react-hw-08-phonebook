import css from './RegisterPage.module.css';

const RegisterPage = () => {
    return (
        <form className={css.login}>
                <input
                    type="text"
                    name="name"
                    placeholder="UserName"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="UserEmail"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPage;
import { NavLink } from "react-router-dom";
import css from './MainNavigate.module.css';


const MainNavigate = () => {
    return (
        <>
            <nav>
                <ul className={css.list}>
                    <NavLink className={css.link} to='/login'>LogIn</NavLink>
                    <NavLink className={css.link} to='/register'>Register</NavLink>
                </ul>
            </nav>
        </>
    );
}

export default MainNavigate;
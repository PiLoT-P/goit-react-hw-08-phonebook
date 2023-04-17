import { NavLink } from "react-router-dom";
import css from './MainNavigate.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectorIsAuth } from "Redux/auth/authSelector";
import { logoutUser } from "Redux/auth/authOperation";


const MainNavigate = () => {
    const isAuth = useSelector(selectorIsAuth);
    const userName = useSelector((state) => state.auth.email);
    const dispatch = useDispatch();

    return (
        <>
            <nav>
                {!isAuth ? <ul className={css.list}>
                    <NavLink className={css.link} to='goit-react-hw-08-phonebook/login'>LogIn</NavLink>
                    <NavLink className={css.link} to='goit-react-hw-08-phonebook/register'>Register</NavLink>
                </ul> : 
                    <div className={css.logout}>
                        <p className={css.text}>{userName}</p>
                        <button className={css.btn} onClick={()=> dispatch(logoutUser())}>Logout</button>
                    </div>
                }
            </nav>
        </>
    );
}

export default MainNavigate;
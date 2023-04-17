import { Navigate, Route, Routes } from "react-router-dom";
import TodoPage from "../../pages/TodoPage/TodoPage";
import MainNavigate from "../Navigate/MainNavigate";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { useSelector } from "react-redux";
import { selectorIsAuth } from "Redux/auth/authSelector";

const PrivateRoute = ({ component, redirectTo = "goit-react-hw-08-phonebook/login" }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ component, redirectTo = "goit-react-hw-08-phonebook/todo" }) => {
  const isAuth = useSelector(selectorIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export const App = () => {
  return (
    <>
      <MainNavigate />
      <Routes>
        <Route path="goit-react-hw-08-phonebook/todo" element={ <PrivateRoute component={<TodoPage/>} />} />
        <Route path="goit-react-hw-08-phonebook/login" element={<PublicRoute component={<LoginPage/>} />} />
        <Route path="goit-react-hw-08-phonebook/register" element={<PublicRoute component={<RegisterPage/>} />} />
        <Route path="*" element={<Navigate to="goit-react-hw-08-phonebook/todo" />} />
      </Routes>
    </>
  );
};

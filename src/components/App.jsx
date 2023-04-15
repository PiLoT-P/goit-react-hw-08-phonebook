import { Navigate, Route, Routes } from "react-router-dom";
import TodoPage from "../pages/TodoPage/TodoPage";
import MainNavigate from "./Navigate/MainNavigate";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";

const tr = false;

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = tr;

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ component, redirectTo = "/todo" }) => {
  const isAuth = tr;

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export const App = () => {
  return (
    <>
      {!tr && <MainNavigate />}
      <Routes>
        <Route path="/todo" element={ <PrivateRoute component={<TodoPage/>} />} />
        <Route path="/login" element={<PublicRoute component={<LoginPage/>} />} />
        <Route path="/register" element={<PublicRoute component={<RegisterPage/>} />} />
        <Route path="*" element={<Navigate to="/todo" />} />
      </Routes>
    </>
  );
};

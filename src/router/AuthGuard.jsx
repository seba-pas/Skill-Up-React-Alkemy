import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC } from './PathUrl';
// import { useSelector } from 'react-redux';

function AuthGuard() {
    // const userState = useSelector((store) => store.user);
    const existUser = localStorage.getItem('token') !== null;

    console.log(existUser);

    return !existUser ? <Navigate replace to={PUBLIC.signin} /> : <Outlet />;
}

export default AuthGuard;

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PUBLIC } from './PathUrl';

function AuthGuard() {
    const token = localStorage.getItem('token');
    const userState = useSelector((store) => store.user);
    const existUser = !!userState.id_user;

    console.log(existUser);

    return !token ? <Navigate replace to={PUBLIC.signin} /> : <Outlet />;
}

export default AuthGuard;

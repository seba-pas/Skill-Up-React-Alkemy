import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PUBLIC } from './PathUrl';

function AuthGuard() {
    const userState = useSelector((store) => store.user);
    const existUser = !!userState.id_user;

    return !existUser ? <Navigate replace to={PUBLIC.signin} /> : <Outlet />;
}

export default AuthGuard;

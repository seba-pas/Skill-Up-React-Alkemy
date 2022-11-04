import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthGuard() {
    const userState = useSelector((store) => store.user);
    const existUser = !!userState.id_user;

    return !existUser ? <Navigate replace to="/login" /> : <Outlet />;
}

export default AuthGuard;

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthGuard() {
    const userState = useSelector((store) => store.user);

    return !userState.id_user ? <Navigate replace to="/login" /> : <Outlet />;
}

export default AuthGuard;

import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function AuthGuard() {
    // const userState = useSelector((store) => store.user);
    const existUser = localStorage.getItem('token') !== null;

    return !existUser ? <Navigate replace to="/login" /> : <Outlet />;
}

export default AuthGuard;

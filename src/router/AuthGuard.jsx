import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { PUBLIC } from './PathUrl';

function AuthGuard() {
    const idUser = localStorage.getItem('idUser');
    const token = localStorage.getItem('token');
    let existsUSer = false;
    if (token && idUser) {
        existsUSer = true;
    }

    // const userState = useSelector((store) => store.user);
    // const existUser = !!userState.id_user;

    return !existsUSer ? <Navigate replace to={PUBLIC.signin} /> : <Outlet />;
}

export default AuthGuard;

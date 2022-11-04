// hooks
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';
import AuthGuard from './AuthGuard';
// pages
import RoutesWithNotFound from './RoutesWithNotFound';
// utils
import { PRIVATE, PUBLIC } from './PathUrl';
import CargaSaldo from '../components/carga saldo/CargaSaldo';

const Signin = lazy(() => import('../pages/Signin/Signin'));

const Dashboard = lazy(() => import('../pages/Private/Home/Home'));
const PrivateLayout = lazy(() => import('../layout/PrivateLayout/PrivateLayout'));

function Router() {
    return (
        <Suspense fallback={<h3>loading</h3>}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/" element={<Navigate to={PRIVATE.home} />} />

                    <Route path={PUBLIC.login} element={<Signin />} />

                    <Route element={<AuthGuard />}>
                        <Route element={<PrivateLayout />}>
                            <Route path={PRIVATE.home} element={<Dashboard />} />
                            <Route path={PRIVATE.cargarSaldo} element={<CargaSaldo />} />
                        </Route>
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

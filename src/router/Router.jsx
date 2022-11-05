// hooks
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';
import AuthGuard from './AuthGuard';
// pages
import RoutesWithNotFound from './RoutesWithNotFound';
// utils
import { PRIVATE, PUBLIC } from './PathUrl';

const Signin = lazy(() => import('../pages/Signin/Signin'));

const Dashboard = lazy(() => import('../pages/Private/Home/Home'));
const PrivateLayout = lazy(() => import('../layout/PrivateLayout/PrivateLayout'));
const TopUpBalance = lazy(() => import('../pages/Private/carga saldo/CargaSaldo'));
const Movements = lazy(() => import('../pages/Private/transacciones/Transacciones'));
const Profile = lazy(() => import('../pages/Private/Perfil/Perfil'));
const Bills = lazy(() => import('../pages/Private/Gastos/Gastos'));
const Contact = lazy(() => import('../pages/Private/contacto/Contacto'));

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
                            <Route path={PRIVATE.cargarSaldo} element={<TopUpBalance />} />
                            <Route path={PRIVATE.movimientos} element={<Movements />} />
                            <Route path={PRIVATE.gastos} element={<Bills />} />
                            <Route path={PRIVATE.perfil} element={<Profile />} />
                            <Route path={PRIVATE.contacto} element={<Contact />} />
                        </Route>
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

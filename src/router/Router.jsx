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
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import Home from '../components/Home';


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
                        </Route>
                    </Route>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/CreateAccount" element={<CreateAccount />} />
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

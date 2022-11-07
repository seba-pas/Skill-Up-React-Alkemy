// hooks
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';
import AuthGuard from './AuthGuard';
// pages
import RoutesWithNotFound from './RoutesWithNotFound';
// utils
import { PRIVATE, PUBLIC } from './PathUrl';
import ButtonAppBar from '../components/appbar/Appbar';

const Signin = lazy(() => import('../pages/Signin/Signin'));

const Dashboard = lazy(() => import('../pages/Private/Home/Home'));
const PrivateLayout = lazy(() => import('../layout/PrivateLayout/PrivateLayout'));
const TopUpBalance = lazy(() => import('../pages/Private/TopUpBalance/TopUpBalance'));
const Transactions = lazy(() => import('../pages/Private/Transactions/Transactions'));
const Profile = lazy(() => import('../pages/Private/Profile/Profile'));
const Bills = lazy(() => import('../pages/Private/Bills/Bills'));
const Contact = lazy(() => import('../pages/Private/contact/Contact'));
const Balance = lazy(() => import('../pages/Private/Balance/Balance'));

function Router() {
    return (
        <Suspense fallback={<h3>loading</h3>}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/button" element={<ButtonAppBar />} />

                    <Route path="/" element={<Navigate to={PRIVATE.home} />} />

                    <Route path={PUBLIC.login} element={<Signin />} />

                    <Route element={<AuthGuard />}>
                        <Route element={<PrivateLayout />}>
                            <Route path={PRIVATE.home} element={<Dashboard />} />
                            <Route path={PRIVATE.topUpBalance} element={<TopUpBalance />} />
                            <Route path={PRIVATE.balance} element={<Balance />} />
                            <Route path={PRIVATE.transactions} element={<Transactions />} />
                            <Route path={PRIVATE.bills} element={<Bills />} />
                            <Route path={PRIVATE.profile} element={<Profile />} />
                            <Route path={PRIVATE.contact} element={<Contact />} />
                        </Route>
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

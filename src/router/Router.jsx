// hooks
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';
import AuthGuard from './AuthGuard';
// pages
import RoutesWithNotFound from './RoutesWithNotFound';
// utils
import { PRIVATE, PUBLIC } from './PathUrl';

const SignIn = lazy(() => import('../pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));

const PrivateLayout = lazy(() => import('../layout/PrivateLayout/PrivateLayout'));
const Home = lazy(() => import('../pages/Private/Home/Home'));
const TopUpBalance = lazy(() => import('../pages/Private/TopUpBalance/TopUpBalance'));
const Transactions = lazy(() => import('../pages/Private/Transactions/Transactions'));
const Profile = lazy(() => import('../pages/Private/Profile/Profile'));
const Bills = lazy(() => import('../pages/Private/Bills/Bills'));
const Contact = lazy(() => import('../pages/Private/Contact/Contact'));
const Balance = lazy(() => import('../pages/Private/Balance/Balance'));

function Router() {
    return (
        <Suspense fallback={<h3>loading</h3>}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/" element={<Navigate to={`${PRIVATE.root}/${PRIVATE.home}`} />} />

                    <Route path={PUBLIC.signin} element={<SignIn />} />
                    <Route path={PUBLIC.signup} element={<SignUp />} />

                    <Route element={<AuthGuard />}>
                        <Route path={`${PRIVATE.root}`} element={<PrivateLayout />}>
                            <Route path={PRIVATE.home} element={<Home />} />
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

import { Suspense } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import RoutesWithNotFound from './RoutesWithNotFound';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import Welcome from '../components/Welcome';
import ResetPassword from '../components/ResetPassword';

function Router() {
    return (
        <Suspense fallback={<h3>loading</h3>}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/" element={<Login />} />
                    <Route path="/Welcome" element={<Welcome />} />
                    <Route path="/CreateAccount" element={<CreateAccount />} />
                    <Route path="/ResetPassword" element={<ResetPassword />} />
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

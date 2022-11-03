import { Suspense } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import RoutesWithNotFound from './RoutesWithNotFound';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';

function Router() {
    return (
        <Suspense fallback={<h3>loading</h3>}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/CreateAccount" element={<CreateAccount />} />
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

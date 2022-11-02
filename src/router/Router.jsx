import { Suspense } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import RoutesWithNotFound from './RoutesWithNotFound';
import AuthGuard from './AuthGuard';

function Router() {
    return (
        <Suspense fallback={<h3>loading</h3>}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/login" element={<span>Login</span>} />
                    <Route element={<AuthGuard />}>
                        <Route path="/*" element={<h1> Privado</h1>} />
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;

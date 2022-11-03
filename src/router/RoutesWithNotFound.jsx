import { Route, Routes } from 'react-router-dom';
import Notfound from '../components/NotFound/NotFound';

// eslint-disable-next-line react/prop-types
function RoutesWithNotFound({ children }) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}
export default RoutesWithNotFound;

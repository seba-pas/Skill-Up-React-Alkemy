import { Route, Routes } from 'react-router-dom';
import NotfoundDesktop from '../components/NotFound/NotFoundDesktop';

// eslint-disable-next-line react/prop-types
function RoutesWithNotFound({ children }) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotfoundDesktop />} />
        </Routes>
    );
}
export default RoutesWithNotFound;

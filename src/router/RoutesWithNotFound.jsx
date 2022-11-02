import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function RoutesWithNotFound({ children }) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    );
}
export default RoutesWithNotFound;

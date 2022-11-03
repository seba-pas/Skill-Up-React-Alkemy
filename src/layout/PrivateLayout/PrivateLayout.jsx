// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
// styles
import { ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <Outlet />

            {/* navbar */}
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

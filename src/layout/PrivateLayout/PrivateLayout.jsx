// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from '../../components/appbar/Appbar';
// styles
import { ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <ButtonAppBar />
            <Outlet />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

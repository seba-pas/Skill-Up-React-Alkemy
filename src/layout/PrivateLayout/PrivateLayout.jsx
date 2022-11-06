// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from '../../components/appbar/Appbar';
import AppBarMobile from '../../components/appbar/AppBarMobile';
// styles
import { ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <ButtonAppBar />
            <Outlet />
            <AppBarMobile />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

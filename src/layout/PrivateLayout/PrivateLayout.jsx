// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from '../../components/appbar/Appbar';
import AppBarMobile from '../../components/appbar/AppBarMobile';
import Footer from '../../components/footer/Footer';
// styles
import { ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <ButtonAppBar />
            <Outlet />
            <AppBarMobile />
            <Footer />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

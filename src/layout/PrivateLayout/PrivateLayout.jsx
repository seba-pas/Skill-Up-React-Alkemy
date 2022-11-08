// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from '../../components/Appbar/Appbar';
import AppBarMobile from '../../components/Appbar/AppBarMobile';
import Footer from '../../components/Footer/Footer';
// styles
import { ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <ButtonAppBar />
            <Outlet />
            <Footer />
            <AppBarMobile />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from '../../components/Appbar/Appbar';
import AppBarMobile from '../../components/Appbar/AppBarMobile';
import Footer from '../../components/Footer/Footer';
// styles
import { ContentOutlet, ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <ButtonAppBar />
            <ContentOutlet>
                <Outlet />
            </ContentOutlet>
            <Footer />
            <AppBarMobile />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

// hooks
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Appbar/Header';
import AppBarMobile from '../../components/Appbar/AppBarMobile';
import Footer from '../../components/Footer/Footer';
// styles
import { ContentOutlet, ContentPrivateLayout } from './Private.styles';

function PrivateLayout() {
    return (
        <ContentPrivateLayout>
            <Header />
            <ContentOutlet>
                <Outlet />
            </ContentOutlet>
            <Footer />
            <AppBarMobile />
        </ContentPrivateLayout>
    );
}

export default PrivateLayout;

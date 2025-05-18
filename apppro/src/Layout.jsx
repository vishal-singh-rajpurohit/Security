import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSect from './components/footer/footerSect';
import { Header, Menu } from './components/header/Header';
import { Transition1 } from './components/Individual/Transitions';
import SuccessPops from './components/Individual/SuccessPops';

const Layout = () => {
    return (
        <div>
            <Transition1 />
            <SuccessPops />
            <Header />
            <Menu />
            <main>
                <Outlet />
            </main>
            <FooterSect />
        </div>
    );
};

export default Layout;
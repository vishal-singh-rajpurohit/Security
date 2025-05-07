import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSect from './components/footer/footerSect';
import { Header, Menu } from './components/header/Header';

const Layout = () => {
    return (
        <div>
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
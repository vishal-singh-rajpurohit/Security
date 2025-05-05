import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSect from './components/footer/footerSect';
import { Header } from './components/header/Header';

const Layout = () => {
    return (
        <div>
           <Header />
            <main>
                <Outlet />
            </main>
            <FooterSect />
        </div>
    );
};

export default Layout;
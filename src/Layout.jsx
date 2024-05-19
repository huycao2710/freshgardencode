import React from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import HeaderComponent from './components/global/HeaderComponent/HeaderComponent';

const Layout = () => {
    const location = useLocation();

    const noHeaderPaths = ['/sign-in', '/sign-up', '/admin', '/admin/users', '/admin/products', '/admin/orders'];

    const showHeader = !noHeaderPaths.includes(location.pathname);

    return (
        <div>
            {showHeader && <HeaderComponent />}
            <AnimatedRoutes />
        </div>
    );
};

export default Layout;

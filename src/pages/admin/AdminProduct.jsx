import React from 'react';
import "../../../src/Dashboard.css";
import SideNav from '../../components/admin/SideNav';
import { Box } from '@mui/material';
import Navbar from '../../components/admin/Navbar';
import ProductList from './products/ProductList';

export default function AdminProduct() {
    return (
        <>
            <div className="bgColor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <ProductList />
                    </Box>
                </Box>
            </div>
        </>
    )
}

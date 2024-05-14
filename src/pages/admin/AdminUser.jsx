import React from 'react'
import SideNav from '../../components/admin/SideNav'
import { Box } from '@mui/material'
import Navbar from '../../components/admin/Navbar'
import UserList from './users/UserList'


export default function AdminUser() {
    return (
        <>
            <div className="bgColor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <UserList />
                    </Box>
                </Box>
            </div>
        </>
    )
}

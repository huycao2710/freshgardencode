import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom'; // Import Link từ React Router
import { useAppStore } from '../../redux/appStore';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const AppBar = styled(MuiAppBar, {
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

export default function Navbar() {
    const updateOpen = useAppStore((state) => state.updateOpen);
    const dopen = useAppStore((state) => state.dopen);

    const user = useSelector((state) => state.user);
    const [userName, setUserName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        setUserName(user?.fullName);
        setAvatar(user?.avatar);
    }, [user?.fullName, user?.avatar]);

    useEffect(() => {
        if (user) {
            setUserName(user.fullName);
            setAvatar(user.avatar);
        }
    }, [user]);

    const getInitials = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#4B494E", color: "#B9D431" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => updateOpen(!dopen)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 2 }}>
                        <Link to="/">
                            <img
                                src="/assets/images/Header/logo.jpg"
                                alt="FreshGarden Admin"
                                style={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    {user?.access_token && (
                        <div
                            className="block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 cursor-pointer flex items-center text-logo-green hover:bg-[#B9D431] hover:text-white"
                            style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}
                        >
                            {avatar ? (
                                <img
                                    src={avatar}
                                    alt={userName}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        marginRight: 8,
                                    }}
                                />
                            ) : (
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: '#B9D431',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: 8,
                                        color: '#fff',
                                        fontSize: 20,
                                    }}
                                >
                                    {getInitials(userName)}
                                </div>
                            )}
                            {userName}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

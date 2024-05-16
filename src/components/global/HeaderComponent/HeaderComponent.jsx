import React, { useState } from 'react';
import Logo from './Header/logo.jpg';
import HeaderBackground from './Header/nenHeader.jpg';
import NhuongQuyen from './Header/Nhuongquyen.jpg';
import { LocalGroceryStore, LocationOn, MailOutline, Menu, PhoneInTalk, Search } from '@mui/icons-material';
import SidebarComponent from '../Sidebar/SidebarComponent';

const HeaderComponent = () => {
    const LogoHeader = {
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '314px',
        height: '42px',
        paddingTop: '4px',
        paddingBottom: '4px',
    };

    const NhuongQuyenLogo = {
        backgroundImage: `url(${NhuongQuyen})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '232px',
        height: '40px',
        marginLeft: '120px'
    };

    const HeaderBackGround = {
        backgroundImage: `url(${HeaderBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '5px',
        paddingBottom: '5px',
        height: '52px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    };

    const [openSidebar, setOpenSidebar] = useState(false);


    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    };

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    };

    return (
        <>
            <div style={HeaderBackGround}>
                <div style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
                    <div style={LogoHeader}></div>
                    <div style={NhuongQuyenLogo}></div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '223px' }}>
                        <span style={{ marginRight: '72px', width: '126px' }}>
                            <PhoneInTalk style={{ color: 'white', fontSize: '14px' }} />
                            <span style={{ color: 'white', marginLeft: '5px', fontSize: '14px' }}>024 3856 3856</span>
                        </span>
                        <span style={{ marginRight: '72px', width: '189px' }}>
                            <MailOutline style={{ color: 'white', fontSize: '14px' }} />
                            <span style={{ color: 'white', marginLeft: '5px', fontSize: '14px' }}>cskh@freshgarden.vn</span>
                        </span>
                        <span style={{ width: '171px' }}>
                            <LocationOn style={{ color: 'white', fontSize: '14px' }} />
                            <span style={{ color: 'white', marginLeft: '5px', fontSize: '14px' }}>46 An Dương, Hà Nội</span>
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '213px' }}>
                        <span style={{ marginRight: '32.25px' }}>
                            <Search style={{ color: 'white', fontSize: '21px' }} />
                        </span>
                        <span style={{ marginRight: '32.25px' }}>
                            <LocalGroceryStore style={{ color: 'white', fontSize: '21px' }} />
                        </span>
                        <span onClick={handleOpenSidebar} style={{ cursor: 'pointer' }}>
                            <Menu style={{ color: 'white', fontSize: '21px' }} />
                        </span>
                    </div>
                    <SidebarComponent open={openSidebar} onClose={handleCloseSidebar} />
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;

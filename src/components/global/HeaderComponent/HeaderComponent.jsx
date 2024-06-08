import React, { useState } from "react";
import Logo from "./Header/logo.jpg";
import HeaderBackground from "./Header/nenHeader.jpg";
import NhuongQuyen from "./Header/Nhuongquyen.jpg";
import {
    LocalGroceryStore,
    LocationOn,
    MailOutline,
    Menu,
    PhoneInTalk,
    Search,
} from "@mui/icons-material";
import SidebarComponent from "../Sidebar/SidebarComponent";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";


const HeaderComponent = () => {
    const HeaderBackGround = {
        backgroundImage: `url(${HeaderBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "5px",
        paddingBottom: "5px",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
    };

    const LogoHeader = {
        backgroundImage: `url(${Logo})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "314px",
        height: "42px",
        paddingTop: "4px",
        paddingBottom: "4px",
        cursor: "pointer",
    };

    const NhuongQuyenLogo = {
        backgroundImage: `url(${NhuongQuyen})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "230px",
        height: "40px",
        marginLeft: "0px",
        cursor: "pointer",
    };

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    };

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    };

    const navigate = useNavigate();

    const handleNavigateNhuongQuyen = () => {
        navigate('/nhuongquyen');
    };

    const handleNavigateHomePage = () => {
        navigate('/');
    };

    const order = useSelector((state) => state.order)

    const user = useSelector((state) => state.user)

    const badgeCount = user?.access_token ? order?.orderItems?.length : 0;

    const handleNavigateOrder = () => {
        if (user?.access_token) {
            navigate("/order");
        } else {
            navigate("/sign-in");
        }
    };

    return (
        <div
            className="container-fluid justify-center items-center"
            style={{ height: "50px", maxHeight: "80vh" }}
        >
            <div className="bg-fixed justify-content-end" style={HeaderBackGround}>
                <div className="mr-10" style={LogoHeader} onClick={handleNavigateHomePage}></div>
                <div style={NhuongQuyenLogo} onClick={handleNavigateNhuongQuyen}></div>
                <div className="text-white text-sm ml-72 flex items-center space-x-12">
                    <div className="flex items-center space-x-5">
                        <PhoneInTalk fontSize="14px" />
                        <a className="cursor-pointer">024 3856 3856</a>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MailOutline fontSize="14px" />
                        <a className="cursor-pointer">cskh@freshgarden.vn</a>
                    </div>
                    <div className="flex items-center space-x-5">
                        <LocationOn fontSize="14px" />
                        <a className="cursor-pointer">46 An Dương, Hà Nội</a>
                    </div>
                </div>

                <div className="text-white flex justify-content-end ml-auto">
                    <span className="cursor-pointer mx-5">
                        <Search fontSize="medium" />
                    </span>
                    <span className="cursor-pointer mx-5" onClick={handleNavigateOrder} >
                        <Badge badgeContent={badgeCount} color="success">
                            <LocalGroceryStore fontSize="medium" />
                        </Badge>
                    </span>
                    <span onClick={handleOpenSidebar} className="cursor-pointer mx-5">
                        <Menu fontSize="medium" />
                    </span>
                    <SidebarComponent open={openSidebar} onClose={handleCloseSidebar} />
                </div>
            </div>
        </div>

    );
};

export default HeaderComponent;

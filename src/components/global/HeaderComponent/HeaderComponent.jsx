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
    };

    const NhuongQuyenLogo = {
        backgroundImage: `url(${NhuongQuyen})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "230px",
        height: "40px",
        marginLeft: "0px",
    };

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    };

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    };

    return (
        <div>
            <div
                className="container-fluid justify-center items-center"
                style={{ height: "50px", maxHeight: "80vh" }}
            >
                <div className="bg-fixed justify-content-between" style={HeaderBackGround}>
                    <div className="mr-10" style={LogoHeader}></div>
                    <div style={NhuongQuyenLogo}></div>
                    <div className="text-white text-sm ml-20 flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <PhoneInTalk fontSize="14px" />
                            <a className="cursor-pointer">024 3856 3856</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MailOutline fontSize="14px" />
                            <a className="cursor-pointer">cskh@freshgarden.vn</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <LocationOn fontSize="14px" />
                            <a className="cursor-pointer">46 An Dương, Hà Nội</a>
                        </div>
                    </div>

                    <div className="text-white flex justify-content-end ml-auto">
                        <span className="cursor-pointer px-5">
                            <Search fontSize="medium" />
                        </span>
                        <span className="cursor-pointer px-5">
                            <LocalGroceryStore fontSize="medium" />
                        </span>
                        <span onClick={handleOpenSidebar} className="cursor-pointer px-5">
                            <Menu fontSize="medium" />
                        </span>
                        <SidebarComponent open={openSidebar} onClose={handleCloseSidebar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as UserAllService from '../../../services/UserAllService';
import { resetUser } from '../../../redux/slides/userAllSlide';
import Loading from '../LoadingComponent/LoadingComponent';

const SidebarComponent = ({ open, onClose }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [userName, setUserName] = useState('');
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const clickLogOut = async () => {
        await UserAllService.logoutUser();
        dispatch(resetUser());
        onClose();
    };

    useEffect(() => {
        setUserName(user?.fullName);
    }, [user?.fullName]);

    useEffect(() => {
        if (user) {
            setUserName(user.fullName);
        }
    }, [user]);

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    const handleClickNavigate = (type) => {
        if (type === 'profile') {
            navigate('/profile-user');
        } else if (type === 'admin') {
            navigate('/admin');
        } else if (type === 'my-order') {
            navigate('/my-order', {
                state: {
                    id: user?.id,
                    token: user?.access_token,
                }
            });
        } else {
            clickLogOut();
        }
        setUserMenuOpen(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.section
                    className="fixed inset-y-0 right-0 w-50 flex z-50"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-screen max-w-sm z-50">
                        <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                            <div className="flex items-center justify-end px-4">
                                <button onClick={onClose} className="bg-gray-500 hover:text-[#B9D431] flex items-center justify-center rounded w-10 h-10">
                                    <ArrowRightOutlined style={{ fontSize: '18px' }} />
                                </button>
                            </div>
                            <div className="mt-4 px-4 flex flex-col items-start">
                                <nav className="space-y-4 w-full">
                                    <Link
                                        to="/"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/' ? 'bg-[#B9D431] text-white' : 'text-black hover:bg-[#B9D431] hover:text-white'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Trang chủ
                                    </Link>
                                    {user?.access_token ? (
                                        <>
                                            <div
                                                onClick={toggleUserMenu}
                                                className="block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 cursor-pointer flex items-center text-black hover:bg-[#B9D431] hover:text-white"
                                                style={{ display: 'flex', flexDirection: 'row' }}
                                            >
                                                {userName}
                                            </div>
                                            {userMenuOpen && (
                                                <div className="mt-2 space-y-2 w-full" style={{ marginLeft: '20px' }}>
                                                    <div
                                                        className="block w-full text-left px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 text-black hover:text-[#B9D431] cursor-pointer"
                                                        onClick={() => handleClickNavigate('profile')}
                                                    >
                                                        Thông tin người dùng
                                                    </div>
                                                    {user?.isAdmin && (
                                                        <div
                                                            className="block w-full text-left px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 text-black hover:text-[#B9D431] cursor-pointer"
                                                            onClick={() => handleClickNavigate('admin')}
                                                        >
                                                            Quản lý hệ thống
                                                        </div>
                                                    )}
                                                    <div
                                                        className="block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 cursor-pointer text-black hover:text-[#B9D431]"
                                                        onClick={() => handleClickNavigate('my-order')}
                                                    >
                                                        Đơn hàng của tôi
                                                    </div>
                                                    <button
                                                        onClick={clickLogOut}
                                                        className="block w-full text-left px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 text-black hover:text-[#B9D431] cursor-pointer"
                                                    >
                                                        Đăng xuất
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            to="/sign-in"
                                            className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/sign-in' ? 'bg-[#B9D431] text-white' : 'text-black hover:bg-[#B9D431] hover:text-white'}`}
                                            onClick={(e) => {
                                                onClose();
                                                e.stopPropagation();
                                            }}
                                        >
                                            Đăng nhập
                                        </Link>
                                    )}
                                    <Link
                                        to="/product"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/product' ? 'bg-[#B9D431] text-white' : 'text-black hover:bg-[#B9D431] hover:text-white'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Sản phẩm
                                    </Link>
                                    <Link
                                        to="/tintuc"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/tintuc' ? 'bg-[#B9D431] text-white' : 'text-black hover:bg-[#B9D431] hover:text-white'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Tin tức
                                    </Link>
                                    <Link
                                        to="/map"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/map' ? 'bg-[#B9D431] text-white' : 'text-black hover:bg-[#B9D431] hover:text-white'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Danh sách cửa hàng
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/contact' ? 'bg-[#B9D431] text-white' : 'text-black hover:bg-[#B9D431]text-white'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Liên hệ
                                    </Link>

                                </nav>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )
            }
        </AnimatePresence >
    );
};

export default SidebarComponent;

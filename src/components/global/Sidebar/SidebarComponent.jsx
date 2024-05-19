import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

const SidebarComponent = ({ open, onClose }) => {
    const location = useLocation();

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
                                    <Link
                                        to="/sign-in"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/sign-in' ? 'bg-[#B9D431] text-white' : 'text-black hover:text-[#B9D431]'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Đăng nhập
                                    </Link>
                                    <Link
                                        to="/sign-up"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/sign-up' ? 'bg-[#B9D431] text-white' : 'text-black hover:text-[#B9D431]'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Đăng kí
                                    </Link>
                                    <Link
                                        to="/product"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/product' ? 'bg-[#B9D431] text-white' : 'text-black hover:text-[#B9D431]'}`}
                                        onClick={(e) => {
                                            onClose();
                                            e.stopPropagation();
                                        }}
                                    >
                                        Sản phẩm
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className={`block px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${location.pathname === '/contact' ? 'bg-[#B9D431] text-white' : 'text-black hover:text-[#B9D431]'}`}
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
            )}
        </AnimatePresence>
    );
};

export default SidebarComponent;

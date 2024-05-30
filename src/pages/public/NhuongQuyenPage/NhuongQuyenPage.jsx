import React from "react";
import { useNavigate } from "react-router-dom";

const NhuongQuyenPage = () => {
    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate('/')
    }
    return (
        <>
            <div class="relative w-full h-auto">
                <div class="absolute top-1/2 left-20 z-30 w-1/2 bg-opacity-50">
                    <p className="text-justify text-5xl font-montserrat font-medium">
                        CƠ HỘI NHƯỢNG QUYỀN<br></br> CÙNG CHÚNG TÔI
                    </p>
                </div>
                {/* <div class="absolute top-3/4 left-20 z-30 w-1/2 bg-opacity-50">
            <button class="mt-4 px-6 py-3 bg-logo-green text-black text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Đăng ký ngay
            </button>
        </div> */}
                <div class="relative z-10 w-screen" style={{ cursor: 'pointer' }} onClick={handleHomePage}>
                    <img
                        src="/assets/images/NhuongQuyen/BannerNQ.jpg"
                        alt="Background Banner"
                        class="w-full h-auto"
                    />
                </div>
                <div class="absolute top-10 left-10 z-20">
                    <img
                        src="/assets/images/NhuongQuyen/NQnobg.jpg"
                        alt="Overlay Banner"
                        class="w-full h-auto"
                    />
                </div>
            </div>

            <div className="about flex flex-col items-center justify-center">
                <div className="container flex items-center justify-center h-auto w-full py-10">
                    <div className="header text-4xl ">
                        <h2>Tại sao lại là Fresh Garden?</h2>
                        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                </div>
                <div className="container flex items-center justify-center h-auto w-full">
                    <div className="grid grid-cols-2 gap-4 w-1/2 ">
                        <div className="col-span-1 p-4 bg-gray-100 flex items-center justify-center">
                            <img src="/assets/images/NhuongQuyen/WhyNQ1.jpg" alt="" />
                            <div>
                                <h2>Hệ thống bài bản</h2>
                            </div>
                        </div>
                        <div className="col-span-1 p-4 bg-gray-100 flex items-center justify-center">
                            <img src="/assets/images/NhuongQuyen/WhyNQ1.jpg" alt="" />
                        </div>
                        <div className="col-span-1 p-4 bg-gray-100 flex items-center justify-center">
                            <img src="/assets/images/NhuongQuyen/WhyNQ1.jpg" alt="" />
                        </div>
                        <div className="col-span-1 p-4 bg-gray-100 flex items-center justify-center">
                            <img src="/assets/images/NhuongQuyen/WhyNQ1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NhuongQuyenPage;
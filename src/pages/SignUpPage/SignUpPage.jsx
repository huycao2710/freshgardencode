import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from "../SignUpPage/Banner/Banner1.jpg";
import img2 from "../SignUpPage/Banner/Banner2.jpg";
import img3 from "../SignUpPage/Banner/Banner3.jpg";
import Carousel from "./Carousel";

const SignUpPage = () => {
  const slides = [img1, img2, img3];

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="relative">
          <div className="max-w">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 bg-gray-200 text-black">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Đăng ký</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Tên
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Họ tên"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Số điện thoại"
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">
                  Địa chỉ
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Địa chỉ"
                />
              </div>
              <div>
                <label htmlFor="city" className="sr-only">
                  Thành phố
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Thành phố"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-logo-green hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng ký
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Bạn đã có sẵn tài khoản?{" "}
                <a
                  href="#"
                  className="font-medium text-logo-green hover:text-lime-500"
                >
                  Đăng nhập
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

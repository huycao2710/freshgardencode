import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from "../SignUpPage/Banner/Banner1.jpg";
import img2 from "../SignUpPage/Banner/Banner2.jpg";
import img3 from "../SignUpPage/Banner/Banner3.jpg";
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from '../../redux/state/auth/Action'

const SignUpPage = () => {
  const slides = [img1, img2, img3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store)

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }
  }, [jwt, auth.jwt, dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password")
    }

    await dispatch(register(userData));

    console.log('userData', userData);
    navigate('/sign-in');
  }

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
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Họ tên
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                  placeholder="Họ tên"
                />
              </div>
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
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-logo-green hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng ký
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Bạn đã có sẵn tài khoản?{" "}
              <Link
                to="/sign-in"
                className="font-medium text-logo-green hover:text-lime-500"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

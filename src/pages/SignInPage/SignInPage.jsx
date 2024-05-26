import React from 'react';
import backgroundImage from './KH3.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/state/auth/Action'

const SignInPage = () => {
  
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget);

    const userData = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password")
    }

    dispatch(login(userData))
    console.log("userData", userData)
    navigate("/")
  };

  return (
    <div style={containerStyle}>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-lg w-full">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900 text-center">Đăng nhập</h3>
              <p className="mb-4 text-red-700 text-center">Nhập email và mật khẩu để đăng nhập</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <label htmlFor="email" className="text-sm text-grey-900">Email*</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mail@loopple.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <label htmlFor="password" className="text-sm text-grey-900">Mật khẩu*</label>
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  placeholder="Nhập mật khẩu"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <button type="submit" className="w-full px-6 py-3 bg-logo-green text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-indigo-200">
                  Đăng Nhập
                </button>
              </form>
              <p className="text-sm text-grey-900 text-center">Bạn chưa có tài khoản? <Link to="/sign-up" className="font-bold text-grey-700 hover:text-[#B9D431]">Tạo tài khoản mới</Link></p>
            </div>
            <div className="text-center mt-5">
              <Link to="/" className="text-lg font-semibold text-slate-500 hover:text-[#B9D431]">
                Fresh Garden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
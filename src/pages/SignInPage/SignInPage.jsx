import React, { useState } from 'react';
import backgroundImage from './KH3.jpg';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="mail@loopple.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <label htmlFor="password" className="text-sm text-grey-900">Mật khẩu*</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Nhập mật khẩu"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <button type="submit" className="w-full px-6 py-3 bg-logo-green text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-indigo-200">
                  Đăng Nhập
                </button>
                <p className="text-sm text-grey-900 text-center">Bạn chưa có tài khoản? <a href="javascript:void(0)" className="font-bold text-grey-700">Tạo tài khoản mới</a></p>
              </form>
            </div>
            <p className="text-lg text-slate-500 py-1 font-semibold text-center mt-5">
              Fresh Garden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
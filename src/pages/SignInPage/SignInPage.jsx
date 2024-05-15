import React, { useState } from 'react'

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12 ">
            <div className="flex items-center xl:p-10 shadow-md">
              <form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl ">
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Đăng nhập</h3>
                <p className="mb-4 text-red-700">Nhập email và mật khẩu để đăng nhập</p>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-1 outline-cyan-500/50 focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Mật khẩu*</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-1 outline-cyan-500/50 focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />

                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-black transition duration-300 md:w-96 rounded-2xl hover:bg-red-700 focus:ring-4 focus:ring-purple-blue-100 bg-logo-green">
                  Đăng Nhập
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Bạn chưa có tài khoản? <a href="javascript:void(0)" className="font-bold text-grey-700">Tạo tài khoản mới</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 my-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          <p className="text-lg text-slate-500 py-1 font-semibold">
            Fresh Garden
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
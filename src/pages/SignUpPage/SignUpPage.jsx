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
          <h2 className="text-3xl font-extrabold text-gray-900">Sign Up</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-logo-green hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-logo-green hover:text-lime-500"
                >
                  Sign in
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

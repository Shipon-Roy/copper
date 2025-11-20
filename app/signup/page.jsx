"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div>
      <div className="relative bg-gray-200 py-24 overflow-hidden">
        {/* Background Brush */}
        <Image
          src="/assets/home/banner.svg"
          alt="banner brush"
          width={732}
          height={1050}
          className="absolute bottom-0 left-0 w-full h-auto"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl text-gray-700 font-bold">Sign Up</h2>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="flex justify-center items-center gap-3 text-gray-700">
              <li>
                <Link href="/" className="hover:text-primary font-medium">
                  Home
                </Link>
              </li>

              <li>
                <span>/</span>
              </li>

              <li className="text-primary font-medium">Sign Up</li>
            </ol>
          </nav>
        </div>

        {/* Shapes */}
        <div className="absolute w-6 h-6 bg-yellow-400 rounded-full top-10 left-10"></div>
        <div className="hidden lg:block absolute w-7 h-7 bg-sky-300 rounded-full top-20 right-10"></div>
        <div className="absolute w-10 h-10 bg-sky-300 rounded-full bottom-14 left-1/4"></div>
        <div className="absolute w-6 h-6 bg-pink-400 rounded-full bottom-24 right-20"></div>
        <div className="absolute w-6 h-6 bg-pink-400 rounded-full top-1/3 left-1/3"></div>
        <div className="absolute w-8 h-8 bg-sky-300 rounded-full top-1/4 right-1/3"></div>
        <div className="absolute w-7 h-7 bg-sky-300 rounded-full bottom-16 right-1/4"></div>
        <div className="absolute w-6 h-6 bg-yellow-400 rounded-full bottom-36 left-16"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
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
          <h2 className="text-4xl text-gray-700 font-bold">Contact Us</h2>

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

              <li className="text-primary font-medium">Contact</li>
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

      <div className="bg-white py-20">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4">
            Contact <strong>Us</strong>,
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat sed.
          </p>
        </div>

        <div className="container mx-auto lg:max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:gap-12 gap-8">
            {/* Contact Form */}
            <div className="lg:flex-1">
              <form
                className="bg-white rounded-lg shadow-2xl p-6 space-y-5"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jack Barker"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Working Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="barker@gmail.com"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Company Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    required
                    placeholder="Website"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Anything else? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Message goes here..."
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Now
                </button>
              </form>
            </div>

            {/* Contact Info & Features */}
            <div className="lg:flex-1 flex flex-col gap-8">
              {/* Contact Info */}
              <div className="bg-white shadow-2xl rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-5 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                  Our Contact Info
                </h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                    <a href="mailto:gothesaasgo@gmail.com">
                      gothesaasgo@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                    (207) 555-0119
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                    3891 Ranchview Dr. Richardson Main Road Near Amazon,
                    California 62639
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="bg-white shadow-2xl rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-5 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 384 512"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  With Gossas you can
                </h4>
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Focus critical developer resources on your core business",
                    "Launch new products faster with less payments code",
                    "Improve conversion from international customers",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

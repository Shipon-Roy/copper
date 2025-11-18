"use client";
import { FcGoogle } from "react-icons/fc";

import Image from "next/image";
import Container from "../Container";

export default function Banner() {
  return (
    <section className="relative bg-[#f8f9fc] py-20 overflow-hidden">
      {/* Background Brush SVG */}
      <Container>
        <Image
          src="/assets/home/banner.svg"
          alt=""
          width={732}
          height={1050}
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
        />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ----- LEFT CONTENT ----- */}
            <div>
              <h2 className="text-4xl text-black lg:text-5xl font-bold leading-tight mb-6">
                Give Your customers human feeling touch{" "}
                <strong className="font-extrabold">Like Never Before</strong>
              </h2>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam
                nonumy eirmod tempor invidunt ut labore et dolore magna.
              </p>

              {/* Form */}
              <form className="mt-8">
                <div className="flex flex-col md:flex-row gap-3">
                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    className="flex-1 px-4 text-gray-900 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  />

                  {/* Button */}
                  <button
                    type="submit"
                    className="bg-pink-300  px-6 py-3 rounded-md w-full md:w-auto flex items-center justify-center gap-2 hover:bg-primary/90 transition"
                  >
                    Request Demo
                    <span>
                      <svg
                        viewBox="0 0 320 512"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path
                          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 
                      160c-12.5 12.5-32.8 12.5-45.3 
                      0s-12.5-32.8 0-45.3L210.7 256 
                      73.4 118.6c-12.5-12.5-12.5-32.8 
                      0-45.3s32.8-12.5 45.3 
                      0l160 160z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-6 text-center">
                  <span className="bg-[#f8f9fc] px-3 text-gray-600 uppercase font-medium relative z-10">
                    Or
                  </span>
                  <div className="absolute top-1/2 left-0 right-0 border-b border-gray-300" />
                </div>

                {/* Google Button */}
                <button
                  type="button"
                  className="w-full bg-gray-300 text-gray-900 border px-4 py-3 rounded-md flex items-center justify-center gap-3 hover:bg-gray-500 hover:text-gray-200 transition"
                >
                  <FcGoogle />

                  <span>Sign Up With Google</span>
                </button>

                <p className="mt-4 text-gray-500">
                  No credit card required. Available on{" "}
                  <a href="#" className="text-primary underline">
                    Mac
                  </a>
                  ,{" "}
                  <a href="#" className="text-primary underline">
                    Windows
                  </a>
                  ,{" "}
                  <a href="#" className="text-primary underline">
                    iOS
                  </a>
                  , &{" "}
                  <a href="#" className="text-primary underline">
                    Android
                  </a>
                </p>
              </form>
            </div>

            {/* ----- RIGHT IMAGE + SHAPES ----- */}
            <div className="relative text-center">
              {/* Play Button */}
              <button
                aria-label="play-button"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 
              -translate-y-1/2 bg-white shadow-lg p-4 rounded-full 
              hover:scale-105 transition z-20"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </button>

              {/* Main Banner Image */}
              <Image
                src="/assets/home/banner-shot.webp"
                alt="banner"
                width={704}
                height={492}
                className="mx-auto"
              />

              {/* Shapes */}
              <div className="absolute top-10 right-10 bg-tertiary w-24 h-24 rounded-full opacity-30" />
              <div className="absolute bottom-10 left-20 bg-primary w-16 h-16 rounded-full opacity-30" />
              <div className="absolute bottom-20 right-28 bg-secondary w-10 h-10 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

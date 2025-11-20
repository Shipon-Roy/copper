"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function AboutBanner() {
  return (
    <>
      <section>
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
            <h2 className="text-4xl text-gray-700 font-bold">About Us</h2>

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

                <li className="text-primary font-medium">About</li>
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
        <div className="bg-white">
          <Container>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div>
                  <h2 className="text-4xl text-gray-800 font-bold mb-4">
                    Our mission is to{" "}
                    <strong>empower businesses With Tools</strong>
                  </h2>

                  <p className="pb-4 mb-5 border-b border-gray-300 text-gray-700 leading-7">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.
                  </p>

                  <ul className="space-y-4 text-gray-700">
                    {[
                      "Habit building in essential steps choose habit Good Things",
                      "Get an overview of Habit Calendars admiral general.",
                      "Start building habit with Habitify on platform to new",
                    ].map((item, index) => (
                      <li className="flex items-start" key={index}>
                        <svg
                          viewBox="0 0 448 512"
                          className="w-5 h-5 mr-3 text-primary flex-none"
                          fill="currentColor"
                        >
                          <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 
                      256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-
                      12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 
                      393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                          />
                        </svg>
                        <p className="leading-7">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Image Section */}
                <div className="text-center relative">
                  <div className="inline-block relative">
                    <Image
                      src="/assets/about/02.webp"
                      alt="Our mission"
                      width={423}
                      height={469}
                      className="rounded-lg mx-auto shadow-lg"
                    />

                    {/* Shapes around image */}
                    <div className="absolute w-10 h-10 bg-secondary rounded-full opacity-50 top-5 -left-5"></div>
                    <div className="absolute w-16 h-16 bg-tertiary rounded-full opacity-50 bottom-0 -right-6"></div>
                    <div className="absolute w-12 h-12 bg-primary rounded-full opacity-50 top-1/2 -right-10"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto py-20  px-4">
              <div className="shadow-lg rounded-lg overflow-hidden bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
                  {/* Item 1 */}
                  <div
                    className="py-8 border-b sm:border-b lg:border-b-0 border-r border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <p className="mb-2 text-yellow-600">Launched in April of</p>
                    <h2 className="text-3xl font-bold text-black">
                      <span>2,015</span>
                    </h2>
                  </div>

                  {/* Item 2 */}
                  <div
                    className="py-8 border-b sm:border-b lg:border-b-0 border-r border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p className="mb-2 text-pink-600">Our product powers</p>
                    <h2 className="text-3xl font-bold text-black">
                      <span>1,000+</span>
                    </h2>
                  </div>

                  {/* Item 3 */}
                  <div
                    className="py-8 border-b sm:border-b-0 border-r border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p className="mb-2 text-green-600">served customers</p>
                    <h2 className="text-3xl font-bold text-black">
                      <span>15M+</span>
                    </h2>
                  </div>

                  {/* Item 4 */}
                  <div className="py-8" data-aos="fade-up" data-aos-delay="300">
                    <p className="mb-2 text-pink-600">Made by hand in</p>
                    <h2 className="text-3xl font-bold text-black">
                      <span>250+</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

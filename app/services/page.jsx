import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Attached Coache",
    icon: (
      <svg
        viewBox="0 0 448 512"
        className="w-8 h-8 text-green-300"
        fill="currentColor"
      >
        <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
      </svg>
    ),
  },
  {
    title: "Instant Notification",
    icon: (
      <svg
        viewBox="0 0 448 512"
        className="w-8 h-8 text-yellow-300"
        fill="currentColor"
      >
        <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
      </svg>
    ),
  },
  {
    title: "Live Attachment",
    icon: (
      <svg
        viewBox="0 0 384 512"
        className="w-8 h-8 text-pink-400"
        fill="currentColor"
      >
        <path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
      </svg>
    ),
  },
  {
    title: "Instant Notification",
    icon: (
      <svg
        viewBox="0 0 448 512"
        className="w-8 h-8 text-yellow-300"
        fill="currentColor"
      >
        <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
      </svg>
    ),
  },
  {
    title: "Live Attachment",
    icon: (
      <svg
        viewBox="0 0 448 512"
        className="w-8 h-8 text-pink-300"
        fill="currentColor"
      >
        <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
      </svg>
    ),
  },
  {
    title: "Attached coache",
    icon: (
      <svg
        viewBox="0 0 384 512"
        className="w-8 h-8 text-green-400"
        fill="currentColor"
      >
        <path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative bg-gray-200 py-24 overflow-hidden">
        <Image
          src="/assets/home/banner.svg"
          alt="banner brush"
          width={732}
          height={1050}
          className="absolute bottom-0 left-0 w-full h-auto"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl text-gray-700 font-bold">Services</h2>

          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="flex justify-center items-center gap-3 text-gray-700">
              <li>
                <Link href="/" className="hover:text-primary font-medium">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary font-medium">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20">
        <Container>
          <div className="mx-auto px-4">
            {/* Header */}
            <div className="flex justify-center text-center mb-14">
              <div className="lg:w-6/12 md:w-8/12">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Our <strong className="text-primary">Services</strong>
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed
                  diam nonumy eirmod tempor invidunt.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-2xl p-10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-sky-100  rounded-full flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    Lorem ipsum dolor sit amet consetetur sadipscing diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

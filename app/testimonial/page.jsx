"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial(1).webp",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial(2).webp",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial2.webp",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial(1).webp",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial(2).webp",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial2.webp",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial(1).webp",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial(2).webp",
  },
  {
    id: 9,
    text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
    name: "Angela Markel",
    position: "CEO, Angular Corporation",
    avatar: "/assets/home/testimonial2.webp",
  },
];

export default function Testimonials() {
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
          <h2 className="text-4xl text-gray-700 font-bold">Testimonial</h2>

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

              <li className="text-primary font-medium">Testimonial</li>
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

      <section className="py-16 bg-white">
        <Container>
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-4">
                What Our <strong>Client says</strong>
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat sed.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 shadow rounded p-6 relative"
                >
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-10 text-gray-300 mb-4"
                    viewBox="0 0 40 35"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.75001 35L13.75 35C15.8203 35 17.5 33.3203 17.5 31.25L17.5 21.25C17.5 19.1797 15.8203 17.5 13.75 17.5L7.50001 17.5L7.50001 12.5C7.50001 9.74219 9.74219 7.5 12.5 7.5L13.125 7.5C14.1641 7.5 15 6.66406 15 5.625L15 1.875C15 0.83594 14.1641 2.25865e-06 13.125 2.34949e-06L12.5 2.40413e-06C5.59375 3.00789e-06 5.05862e-06 5.59375 5.66238e-06 12.5L7.30156e-06 31.25C7.48255e-06 33.3203 1.6797 35 3.75001 35ZM26.25 35L36.25 35C38.3203 35 40 33.3203 40 31.25L40 21.25C40 19.1797 38.3203 17.5 36.25 17.5L30 17.5L30 12.5C30 9.74219 32.2422 7.5 35 7.5L35.625 7.5C36.6641 7.5 37.5 6.66406 37.5 5.625L37.5 1.875C37.5 0.835938 36.6641 2.91637e-07 35.625 3.82475e-07L35 4.37114e-07C28.0937 1.04088e-06 22.5 5.59375 22.5 12.5L22.5 31.25C22.5 33.3203 24.1797 35 26.25 35Z" />
                  </svg>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg mb-6">{item.text}</p>

                  {/* Avatar & Info */}
                  <div className="flex items-center mt-4">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h6 className="text-xl text-gray-700 font-semibold">
                        {item.name}
                      </h6>
                      <p className="text-gray-500">{item.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

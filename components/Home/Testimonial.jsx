"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Container from "../Container";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
      avatar: "/assets/home/testimonial(2).webp",
      name: "Angela Markel",
      role: "CEO, Angular Corporation",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
      avatar: "/assets/home/testimonial(1).webp",
      name: "Angela Markel",
      role: "CEO, Angular Corporation",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
      avatar: "/assets/home/testimonial2.webp",
      name: "Angela Markel",
      role: "CEO, Angular Corporation",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
      avatar: "/assets/home/testimonial(2).webp",
      name: "Angela Markel",
      role: "CEO, Angular Corporation",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
      avatar: "/assets/home/testimonial(1).webp",
      name: "Angela Markel",
      role: "CEO, Angular Corporation",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, kasd gubergren, seatakimata dolores et rebum stetclita",
      avatar: "/assets/home/testimonial2.webp",
      name: "Angela Markel",
      role: "CEO, Angular Corporation",
    },
  ];

  return (
    <section className="relative py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-gray-800 font-bold mb-5">
            What Our <strong>Client says</strong>
          </h2>
          <p className="text-gray-600">
            Lorem ipsum sadip dolor sit amet, consetetur sadip scing elitr, diam
            nonumy eirmod <br /> tempor invi duntut labore et dolore magna
            aliquyam erat,
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-slider"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-6 border border-gray-200 shadow-lg rounded-2xl bg-gray-50 relative">
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-10 mb-4 text-primary"
                    viewBox="0 0 40 35"
                    fill="currentColor"
                  >
                    <path d="M3.75001 35L13.75 35C15.8203 35..." />
                  </svg>

                  {/* Text */}
                  <p className="text-lg text-gray-600 font-medium">
                    {item.text}
                  </p>

                  {/* Arrow Shape */}
                  <Image
                    src="/images/testimonials/arrow.png"
                    alt=""
                    width={32}
                    height={16}
                    className="absolute top-full left-6"
                  />

                  {/* User Info */}
                  <div className="flex items-center mt-6">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="text-xl text-gray-700 font-semibold">
                        {item.name}
                      </p>
                      <p className="text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="/testimonial"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            View All Testimonials
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5..." />
            </svg>
          </a>
        </div>
      </Container>

      {/* Background Shapes */}
      <div className="shape-1 bg-yellow-300 absolute top-14 left-10 w-20 h-20 rounded-full"></div>
      <div className="shape-2 bg-pink-400 absolute top-40 right-12 w-20 h-20 rounded-full"></div>
      <div className="shape-3 bg-sky-300 absolute bottom-24 left-32 w-20 h-20 rounded-full"></div>
      <div className="shape-4 bg-yellow-300 absolute bottom-10 right-28 w-20 h-20 rounded-full"></div>
      <div className="shape-5 bg-pink-400 absolute top-1/2 left-1/4 w-6 h-6 rounded-full"></div>
      <div className="shape-6 bg-sky-300 absolute top-1/4 right-1/3 w-6 h-6 rounded-full"></div>
    </section>
  );
}

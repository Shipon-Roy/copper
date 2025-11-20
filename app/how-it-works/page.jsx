// components/FeatureSections.jsx
"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const features = [
  {
    id: 1,
    title: "Task Management",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores etea",
    image: "/assets/home/how-it-works-1.webp",
    reverse: true,
  },
  {
    id: 2,
    title: "Collaborative Tasks",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores etea",
    image: "/assets/home/03.webp",
    reverse: false,
  },
  {
    id: 3,
    title: "Built-in Documents",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores etea",
    image: "/assets/home/03.webp",
    reverse: true,
  },
];

export default function page() {
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
          <h2 className="text-4xl text-gray-700 font-bold">How It Works</h2>

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

              <li className="text-primary font-medium">How It Works</li>
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
      <div className="relative bg-white">
        <Container>
          {features.map((feature) => (
            <section key={feature.id} className="py-16 relative">
              <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Conditional reverse for layout */}
                <div
                  className={`lg:flex-1 ${
                    feature.reverse ? "order-1" : "order-2"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={658}
                    height={435}
                    className="w-full rounded-lg shadow p-1"
                  />
                </div>
                <div className="lg:flex-1 text-center lg:text-left">
                  <h2 className="text-3xl text-gray-800 font-bold mb-5">
                    {feature.title.split(" ")[0]}{" "}
                    <strong>{feature.title.split(" ")[1]}</strong>
                  </h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="absolute -top-10 left-5 w-6 h-6 bg-blue-100 rounded-full"></div>
              <div className="absolute top-10 -right-5 w-8 h-8 bg-green-200 rounded-full"></div>
              <div className="absolute bottom-5 left-10 w-5 h-5 bg-red-200 rounded-full"></div>
            </section>
          ))}
        </Container>
      </div>
    </div>
  );
}

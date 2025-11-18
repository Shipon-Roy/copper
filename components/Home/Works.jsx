"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../Container";

const tabs = [
  {
    title: "Task Management",
    icon: (
      <svg viewBox="0 0 512 512" className="mx-auto mb-3 w-8 h-8">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
      </svg>
    ),
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    image: "/assets/home/how-it-works-1.webp",
  },
  {
    title: "Built In Chat",
    icon: (
      <svg viewBox="0 0 512 512" className="mx-auto mb-3 w-8 h-8">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
      </svg>
    ),
    description:
      "Consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt.",
    image: "/assets/home/03.webp",
  },
  {
    title: "Project Analytics",
    icon: (
      <svg viewBox="0 0 512 512" className="mx-auto mb-3 w-8 h-8">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
      </svg>
    ),
    description:
      "Diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    image: "/assets/home/04.png",
  },
  {
    title: "Task Collaboration",
    icon: (
      <svg viewBox="0 0 512 512" className="mx-auto mb-3 w-8 h-8">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 96 0 1 1 0-192z"></path>
      </svg>
    ),
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum stet clita.",
    image: "/assets/home/how-it-works-1.webp",
  },
];

export default function Works() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How <span className="text-pink-500">it Works</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam.
          </p>
        </div>

        {/* Tabs */}
        <ul className="flex flex-wrap justify-center gap-5">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`
                cursor-pointer px-10 py-3 rounded-lg transition 
                ${
                  active === index
                    ? "text-pink-500 font-semibold bg-pink-50 shadow"
                    : "text-gray-700 hover:text-pink-500"
                }
              `}
            >
              <div className="text-center">
                {tab.icon}
                <span className="block font-medium">{tab.title}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <Image
              src={tabs[active].image}
              width={670}
              height={440}
              alt="How it works"
              className="rounded-xl shadow-lg bg-white p-2"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl text-gray-800 font-semibold">
              {tabs[active].title.split(" ")[0]}{" "}
              <strong>{tabs[active].title.split(" ")[1]}</strong>
            </h2>

            <p className="mt-5 mb-7 text-gray-600 leading-relaxed">
              {tabs[active].description}
            </p>

            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
            >
              View More
              <svg viewBox="0 0 320 512" className="w-4 h-4">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5 0-32.8 0-45.3s32.8 0 45.3 0l160 160z"></path>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

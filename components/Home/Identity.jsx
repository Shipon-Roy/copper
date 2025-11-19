"use client";

import Image from "next/image";
import Container from "../Container";

export default function Identity() {
  const features = [
    "Habit building in essential steps choose habit Good Things",
    "Get an overview of Habit Calendars admiral general.",
    "Start building habit with Habitify on platform to new",
  ];

  return (
    <section className="pb-0 py-20 bg-white">
      <Container>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left Content */}
            <div className="lg:w-5/12 order-2 lg:order-1">
              <h2 className="mb-5 text-3xl text-gray-800 font-semibold leading-tight">
                Who Are We And <strong>What Is Our Identity?</strong>
              </h2>

              <p className="pb-4 mb-5 border-b border-gray-300 text-gray-700">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat sed. At vero eos et accusam et justo duo dolores
              </p>

              <ul className="space-y-4">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    {/* Check Icon */}
                    <svg
                      viewBox="0 0 448 512"
                      className="mr-3 w-5 h-5 text-pink-400"
                      fill="currentColor"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="lg:w-6/12 order-1 lg:order-2 flex justify-center">
              <div className="inline-block rounded-lg shadow-lg relative">
                <Image
                  src="/assets/home/01.webp"
                  alt="Who Are We And What Is Our Identity?"
                  width={423}
                  height={469}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

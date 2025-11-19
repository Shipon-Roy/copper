"use client";

import Image from "next/image";
import Container from "../Container";

export default function Workflow() {
  return (
    <section className="relative bg-gray-300 py-20" data-aos="fade-in">
      <Container>
        {/* Top Brush */}
        <Image
          src="/assets/home/section-top.svg"
          alt="section-top"
          width={732}
          height={1050}
          className="absolute top-0 left-0 w-full h-6 md:h-auto"
        />

        {/* Bottom Brush */}
        <Image
          src="/assets/home/section-bottom.svg"
          alt="section-bottom"
          width={732}
          height={1050}
          className="absolute bottom-0 left-0 w-full h-6 md:h-auto"
        />

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Right Image */}
            <div className="lg:w-5/12 order-2 lg:order-1">
              <h2 className="mb-6 text-3xl text-gray-800 font-semibold leading-tight">
                Create an automated <strong>workflow by setting</strong>
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat sed.
              </p>
            </div>

            {/* Left Content */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/assets/home/03.webp"
                alt="Create an automated workflow"
                width={697}
                height={439}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

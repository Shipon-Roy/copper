"use client";
import Image from "next/image";
import React from "react";
import Container from "../Container";

export default function Vision() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-100 py-20">
        <Container>
          <Image
            src="/assets/home/section-top.svg"
            alt=""
            width={732}
            height={1050}
            className="absolute top-0 left-0 w-full h-6 md:h-auto"
          />

          <Image
            src="/assets/home/section-bottom.svg"
            alt=""
            width={732}
            height={1050}
            className="absolute bottom-0 left-0 w-full h-6 md:h-auto"
          />

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Image Block */}
              <div>
                <div className="relative inline-block">
                  <Image
                    src="/assets/about/03.webp"
                    alt="What Are The Main Vision Of Company?"
                    width={423}
                    height={468}
                    className="rounded-lg"
                  />

                  {/* Floating Shapes */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary/50 rounded-full"></div>
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-tertiary/50 rounded-full"></div>
                  <div className="absolute top-1/2 -right-5 w-16 h-16 bg-primary/50 rounded-full"></div>
                </div>
              </div>

              {/* Text Block */}
              <div>
                <h2 className="mb-4 text-3xl text-gray-800 font-bold leading-snug">
                  What Are The Main <strong>Vision Of Company?</strong>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat sed. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata
                  sanctus est Lorem ipsum dolor sit amet orem ipsum dolor sit
                  amet
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="py-20 bg-white">
        <Container>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div>
                <Image
                  src="/assets/about/01.webp"
                  alt="Marsh Angela Costa"
                  width={660}
                  height={468}
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center h-full">
                <h2 className="pb-4 text-gray-800 text-2xl font-semibold border-b border-gray-300">
                  “Copper gives us the ease to have people hop in where they
                  need to, to get to a customer resolution really quickly.”
                </h2>

                <p className="mt-3 text-gray-700">
                  <span className="font-medium">Marsh Angela Costa</span>{" "}
                  <span className="opacity-80"> • CEO, Trello</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-20 pb-0 overflow-hidden">
      <Container>
        {/* Background Brush Image */}
        <Image
          src="/assets/home/section-top.svg"
          alt="footer brush"
          width={732}
          height={1050}
          className="absolute top-0 left-0 w-full h-auto"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* CTA Section */}
          <div className="flex justify-center">
            <div className="lg:w-1/2 text-center">
              <h2 className="text-3xl text-gray-800 font-bold mb-7">
                Join 75,000+ Growing Business That Use Copper To Their Brand
              </h2>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-gray-600 px-6 py-3 rounded-lg hover:bg-primary/90 transition mb-10"
              >
                Get Started With Us
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M278.6 233.4c12.5 12.5 ..."></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="border-b border-gray-300/30"></div>

          {/* Footer Widgets */}
          <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-6 mt-12 mb-16">
            {/* Logo + About */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div className="max-w-xs">
                <Link href="/" className="inline-block">
                  <Image
                    src="/assets/logo.webp"
                    width={152}
                    height={30}
                    alt=" "
                    className="h-[30px] w-[152px]"
                  />
                </Link>
                <p className="mt-7 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore dolore magna
                  aliquyam eratnonumy onsetetur
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 sm:col-span-3 col-span-6">
              <h5 className="font-semibold text-gray-800 mb-5">Quick Links</h5>
              <ul className="space-y-2">
                {["about", "services", "pricing", "contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item}`}
                      className="capitalize font-medium text-gray-600 hover:text-primary transition underline-offset-2 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-2 sm:col-span-3 col-span-6">
              <h5 className="font-semibold text-gray-800 mb-5">Social Links</h5>
              <ul className="space-y-2">
                {[
                  { name: "facebook", url: "https://www.facebook.com/" },
                  { name: "twitter", url: "https://twitter.com/" },
                  { name: "github", url: "https://github.com/" },
                  { name: "linkedin", url: "https://www.linkedin.com/" },
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      className="capitalize font-medium text-gray-600 hover:text-primary transition hover:underline underline-offset-2"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <h5 className="font-semibold text-gray-800 mb-5">
                Let's Subscribe Your Email
              </h5>
              <form action="#" method="post" noValidate>
                <div className="flex max-w-[342px]">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="px-4 py-3 w-full border text-gray-700 border-gray-800 rounded-l-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-pink-400 text-gray-700 px-5 flex items-center justify-center rounded-r-md"
                  >
                    <svg
                      width="31"
                      height="16"
                      viewBox="0 0 31 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.7071 8.70808C31.0976 8.31756 31.0976 7.68439 30.7071 7.29387L24.3431.929909C23.9526.539384 23.3195.539384 22.9289.929909 22.5384 1.32043 22.5384 1.9536 22.9289 2.34412l5.6569 5.65686-5.6569 5.65682C22.5384 14.0484 22.5384 14.6815 22.9289 15.072 23.3195 15.4626 23.9526 15.4626 24.3431 15.072l6.364-6.36392zM0 9.00098H30v-2H0v2z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />
          {/* Footer Bottom */}
          <div className="border-t border-gray-300/30 py-5 text-center">
            <p className="pt-5 font-medium text-gray-700">
              Copyright © 2025 Designed & Developed
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

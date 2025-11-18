"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Navber() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <Container>
        <nav className="container mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                alt="Copper NextJS"
                src="/assets/logo.webp"
                width={152}
                height={30}
                priority
              />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto block lg:hidden bg-white shadow rounded w-11 h-11 items-center justify-center"
          >
            {open ? (
              <svg className="h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293L3 5.586 8.414 11 3 16.414l1.293 1.293L11 12.414l6.707 6.707L19 16.414 13.586 11 19 5.586 17.707 4.293 11 10.293 4.293 4.293z"
                />
              </svg>
            ) : (
              <svg className="h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M0 3h20v2H0V3zM0 9h20v2H0V9zM0 15h20v2H0v-2z" />
              </svg>
            )}
          </button>

          {/* Nav Menu */}
          <ul
            className={`${
              open ? "block" : "hidden"
            } w-full lg:w-auto lg:flex bg-white lg:bg-transparent mt-4 lg:mt-0`}
          >
            {["Home", "About", "Services", "Team", "Blog", "Contact"].map(
              (item) => (
                <li key={item} className="lg:ml-6">
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block py-2 text-gray-700 hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}

            {/* Dropdown */}
            <li className="relative group lg:ml-6">
              <span className="flex cursor-pointer items-center py-2 text-gray-700">
                Pages
                <svg
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>

              <ul
                className="
                  absolute left-0 top-10 min-w-[220px]   shadow-xl border border-gray-700 rounded-md p-5
                    z-50
                  opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                {[
                  "How it works",
                  "Testimonial",
                  "Career",
                  "Terms & Condition",
                  "Pricing",
                  "Pricing-2",
                  "Privacy Policy",
                  "FAQ",
                  "Changelog",
                  "Elements",
                  "404",
                ].map((page) => (
                  <li key={page}>
                    <Link
                      href={`/${page.toLowerCase().replace(/ &| |-|\./g, "-")}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Buttons */}
            <li className="mt-4 inline-block lg:hidden">
              <button className="border  btn-sm">Sign Up</button>
            </li>
            <li className="mt-4 inline-block lg:hidden">
              <button className="btn btn-sm">Login</button>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="border border-pink-500 hover:bg-pink-500 rounded py-2  px-4 text-gray-800">
              Sign Up
            </button>
            <button className="text-gray-800">Login </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

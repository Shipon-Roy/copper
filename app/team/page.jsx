"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const filters = ["all", "developers", "designers", "marketers"];

const teamMembers = [
  {
    name: "Angelina Jolie",
    role: "Senior Developer",
    image: "/assets/team/01.webp",
    groups: ["developers", "all"],
    dots: ["bg-yellow-300", "bg-pink-400", "bg-blue-400"],
  },
  {
    name: "Juley Anle",
    role: "Senior Designer",
    image: "/assets/team/02.webp",
    groups: ["designers", "all"],
    dots: ["bg-pink-400", "bg-yellow-300", "bg-blue-400"],
  },
  {
    name: "Kim Domingo",
    role: "Email Marketer",
    image: "/assets/team/03.webp",
    groups: ["marketers", "all"],
    dots: ["bg-blue-400", "bg-yellow-300", "bg-pink-400"],
  },
  {
    name: "Angelina Jolie",
    role: "Senior Developer",
    image: "/assets/team/04.webp",
    groups: ["developers", "all"],
    dots: ["bg-yellow-300", "bg-pink-400", "bg-blue-400"],
  },
  {
    name: "Juley Anle",
    role: "Senior Designer",
    image: "/assets/team/05.webp",
    groups: ["designers", "all"],
    dots: ["bg-pink-400", "bg-yellow-300", "bg-blue-400"],
  },
  {
    name: "Kim Domingo",
    role: "Email Marketer",
    image: "/assets/team/06.webp",
    groups: ["marketers", "all"],
    dots: ["bg-blue-400", "bg-yellow-300", "bg-pink-400"],
  },
];

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTeam =
    activeFilter === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.groups.includes(activeFilter));

  return (
    <>
      <div className="relative bg-gray-200 py-24 overflow-hidden">
        <Image
          src="/assets/home/banner.svg"
          alt="banner brush"
          width={732}
          height={1050}
          className="absolute bottom-0 left-0 w-full h-auto"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl text-gray-700 font-bold">Team</h2>

          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="flex justify-center items-center gap-3 text-gray-700">
              <li>
                <Link href="/" className="hover:text-primary font-medium">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary font-medium">Team</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="mb-4 text-3xl text-gray-800 font-bold">
              Our <span className="text-pink-400">Team Members</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>

          {/* Filters */}
          <ul className="flex justify-center items-center flex-wrap mt-7 gap-3">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`py-2 px-5 border font-medium rounded-lg transition-all ${
                    activeFilter === filter
                      ? "bg-red-500 text-white shadow-md"
                      : "border-red-500 text-gray-700 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  {filter === "all" ? "All Together" : filter}
                </button>
              </li>
            ))}
          </ul>

          {/* Team Grid */}
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {filteredTeam.map((member, index) => (
              <li
                key={index}
                className="text-center p-7 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] bg-white transition-all hover:-translate-y-2"
              >
                {/* Avatar container */}
                <div className="relative inline-block mb-4">
                  {/* colored small dots */}
                  {member.dots.map((dot, i) => (
                    <span
                      key={i}
                      className={`w-4 h-4 rounded-full absolute ${dot}`}
                      style={{
                        top: i === 0 ? "-5px" : i === 1 ? "20%" : "70%",
                        right: i === 0 ? "20%" : i === 1 ? "-5px" : "-8px",
                      }}
                    ></span>
                  ))}

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={220}
                    height={220}
                    className="rounded-full mx-auto"
                  />
                </div>

                <h4 className="font-semibold text-gray-800 text-xl">
                  {member.name}
                </h4>
                <p className="text-gray-500 mt-1">{member.role}</p>

                {/* Social Icons */}
                <ul className="flex items-center justify-center gap-5 mt-4 text-xl text-gray-700">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

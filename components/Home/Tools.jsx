"use client";

import Image from "next/image";

export default function Tools() {
  const brands = [
    "/assets/home/brands/01-colored.webp",
    "/assets/home/brands/02-colored.webp",
    "/assets/home/brands/03-colored.webp",
    "/assets/home/brands/04-colored.webp",
    "/assets/home/brands/05-colored.webp",
    "/assets/home/brands/06-colored.webp",
    "/assets/home/brands/01-colored.webp",
  ];

  return (
    <section className="relative bg-[#f8f8f8] py-20">
      {/* Top Brush */}
      <Image
        src="https://copper-nextjs.vercel.app/images/brushes/section-top.svg"
        alt=""
        width={732}
        height={1050}
        className="absolute top-0 left-0 w-full h-6 md:h-auto"
      />

      {/* Bottom Brush */}
      <Image
        src="https://copper-nextjs.vercel.app/images/brushes/section-bottom.svg"
        alt=""
        width={732}
        height={1050}
        className="absolute bottom-0 left-0 w-full h-6 md:h-auto"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="md:w-2/3 lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl text-gray-900 font-semibold mb-4">
                Integrate the <strong>tools you already use</strong>
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </p>
            </div>

            {/* Circle Icons */}
            <div className="lg:w-1/2 relative h-[300px] sm:h-[370px] lg:h-96 flex items-center justify-center py-20">
              <ul className="in-circle  flex items-center justify-center -translate-y-1/2 scale-[0.6] sm:scale-[0.8] lg:scale-100">
                {brands.map((image, idx) => (
                  <li
                    key={idx}
                    className={`bg-white rounded-full flex items-center justify-center 
                    ${idx % 2 === 0 ? "w-20 h-[180px]" : "w-[90px] h-[114px]"} 
                    ${
                      idx === 2 || idx === 4 || idx === 8
                        ? "w-[82px] h-[82px]"
                        : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt="brand-logo"
                      width={100}
                      height={100}
                      className="w-auto h-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function IntegrateTools() {
  return (
    <section className="relative bg-gray-300 py-16 md:py-24">
      {/* Top Brush */}
      <Image
        src="/assets/home/section-top.svg"
        alt=""
        width={800}
        height={100}
        className="absolute top-0 left-0 w-full h-6 md:h-auto"
      />

      {/* Bottom Brush */}
      <Image
        src="/assets/home/section-bottom.svg"
        alt=""
        width={800}
        height={100}
        className="absolute bottom-0 left-0 w-full h-6 md:h-auto"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl text-gray-900 md:text-4xl font-semibold mb-4">
              Integrate the <strong>tools you already use</strong>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat sed.
            </p>
          </div>

          {/* Rotating Items */}
          <div className="lg:w-1/2 h-[300px] sm:h-[370px] lg:h-96 relative flex items-center justify-center ">
            <ul
              className="relative list-none flex items-center justify-center 
              -translate-y-1/2 scale-[0.6] sm:scale-[0.8] lg:scale-100"
              style={{
                top: "20%",
                margin: 0,
                padding: 0,
              }}
            >
              {/* Inner Main Circle */}
              <li className="w-[150px] h-[150px] bg-white shadow-md rounded-full flex items-center justify-center">
                <Image
                  src="/assets/home/brands/01-colored.webp"
                  alt="brand-logo"
                  width={50}
                  height={20}
                />
              </li>

              {/* Rotating Items */}
              {[
                "02-colored.webp",
                "03-colored.webp",
                "04-colored.webp",
                "05-colored.webp",
                "06-colored.webp",
                "01-colored.webp",
                "03-colored.webp",
                "05-colored.webp",
              ].map((img, i) => (
                <li
                  key={i}
                  className={`absolute bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-1500`}
                  style={{
                    width: i % 2 === 0 ? "82px" : "114px",
                    height: i % 2 === 0 ? "82px" : "114px",
                    transform: `rotate(${
                      (i + 1) * 45
                    }deg) translate(13em) rotate(-${(i + 1) * 45}deg)`,
                  }}
                >
                  <Image
                    src={`/assets/home/brands/${img}`}
                    alt="brand-logo"
                    width={80}
                    height={40}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

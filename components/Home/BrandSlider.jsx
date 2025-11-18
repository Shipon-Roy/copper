"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const sliders = [
  { image: "/assets/home/brands/01-colored.webp" },
  { image: "/assets/home/brands/02-colored.webp" },
  { image: "/assets/home/brands/03-colored.webp" },
  { image: "/assets/home/brands/04-colored.webp" },
  { image: "/assets/home/brands/05-colored.webp" },
  { image: "/assets/home/brands/06-colored.webp" },
  { image: "/assets/home/brands/03-colored.webp" },
];

export default function BrandSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-8">
      <div className=" mx-auto px-4">
        <Slider {...settings}>
          {sliders.map((s, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
                <Image
                  src={s.image}
                  alt="Brand logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

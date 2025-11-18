import Banner from "@/components/Home/Banner";
import BrandSlider from "@/components/Home/BrandSlider";
import Tools from "@/components/Home/Tools";
import Works from "@/components/Home/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <BrandSlider />
      <Works />
      <Tools />
    </>
  );
}

import Banner from "@/components/Home/Banner";
import BrandSlider from "@/components/Home/BrandSlider";
import Growth from "@/components/Home/Growth";
import Identity from "@/components/Home/Identity";
import Testimonial from "@/components/Home/Testimonial";
import Tools from "@/components/Home/Tools";
import Workflow from "@/components/Home/Workflow";
import Works from "@/components/Home/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <BrandSlider />
      <Works />
      <Tools />
      <Growth />
      <Workflow />
      <Identity />
      <Testimonial />
    </>
  );
}

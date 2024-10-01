import Blog from "@/components/Home/Blog";
import Breadcrumb from "@/components/Home/Breadcrumb";
import Costcalculator from "@/components/Home/Costcalculator";
import Organization from "@/components/Home/Organization";
import Testimonial from "@/components/Home/Testimonial";
import Whychooseus from "@/components/Home/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Breadcrumb />
      <Whychooseus />
      <Testimonial />
      <Organization />
      <Costcalculator />
      <Blog />
    </>
  );
}

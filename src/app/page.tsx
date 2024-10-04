import Blog from "@/components/home/Blog";
import Breadcrumb from "@/components/home/Breadcrumb";
import Costcalculator from "@/components/home/Costcalculator";
import FAQSection from "@/components/home/FAQSection";
import Faq from "@/components/home/FAQSection";
import Howwework from "@/components/home/Howwework";
import Organization from "@/components/home/Organization";
import Ourservices from "@/components/home/Ourservices";
import Testimonial from "@/components/home/Testimonial";
import Whychooseus from "@/components/home/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Breadcrumb />
      <Whychooseus />
      <Ourservices />
      <FAQSection />
      {/* <Testimonial />
      <Organization /> */}
      <Howwework />
      <Costcalculator />
      {/* <Blog /> */}
    </>
  );
}

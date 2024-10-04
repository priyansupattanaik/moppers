import CostCalculator from "@/components/home/Costcalculator";
import Testimonial from "@/components/home/Testimonial";
import Breadcrumb from "@/components/services/Breadcrumb";
import Ourservices from "@/components/services/Ourservices";
import React from "react";

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <Ourservices />
      {/* <Testimonial />
      <CostCalculator /> */}
    </>
  );
}

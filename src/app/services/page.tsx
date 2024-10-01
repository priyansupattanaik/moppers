import CostCalculator from "@/components/Home/Costcalculator";
import Testimonial from "@/components/Home/Testimonial";
import Breadcrumb from "@/components/Services/Breadcrumb";
import Ourservices from "@/components/Services/Ourservices";
import React from "react";

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <Ourservices />
      <Testimonial />
      <CostCalculator />
    </>
  );
}

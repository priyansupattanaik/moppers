import Testimonial from "@/components/Home/Testimonial";
import Breadcrumb from "@/components/Pricing/Breadcrumb";
import Plans from "@/components/Pricing/Plans";

import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Plans />
      <Testimonial />
    </>
  );
}

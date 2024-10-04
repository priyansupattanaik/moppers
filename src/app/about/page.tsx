import Aboutus from "@/components/about/Aboutus";
import Breadcrumb from "@/components/about/Breadcrumb";
import Ourgoal from "@/components/about/Ourgoal";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Aboutus />
      {/* {<Ourgoal />} */}
    </>
  );
}

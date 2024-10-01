import Breadcrumb from "@/components/Contact/Breadcrumb";
import Helpcenter from "@/components/Contact/Helpcenter";
import Map from "@/components/Contact/Map";
import Offices from "@/components/Contact/Offices";

import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Offices />
      <Helpcenter />
      <Map />
    </>
  );
}

import Breadcrumb from "@/components/contact/Breadcrumb";
import Details from "@/components/contact/Details";
import Helpcenter from "@/components/contact/Helpcenter";
import Map from "@/components/contact/Map";
import Offices from "@/components/contact/Offices";

import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Offices />
      <Details />
      <Helpcenter />
      <Map />
    </>
  );
}

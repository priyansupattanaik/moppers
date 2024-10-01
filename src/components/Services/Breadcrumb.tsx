import React from "react";
import servicesHeader from "@/assets/moppers-services-header.jpg";
import curveborder from "@/assets/shapeOneborder.webp";

export default function Breadcrumb() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHeader.src})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90"></div>

        <img
          src={curveborder.src}
          className="absolute z-20 bottom-0 left-0 right-0 w-full"
          alt="Curved border"
        />

        <div className="lg:main-container px-4 h-full flex items-center relative z-30">
          <div className="w-full space-y-5">
            <div className="flex items-center gap-5">
              <span className="h-px w-12 bg-gray-400"></span>
              <div className="uppercase text-white font-semibold text-sm">
                Our Services
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              Professional cleaning
              <br /> services for your homes
              <br /> and offices
            </h1>
            <p className="text-base md:text-lg text-[#9492B0]">
              We are a professional cleaning company founded in 1997
              <br /> and providing leading commercial and residential cleaning
              <br /> solutions in the United States.
            </p>
            <div className="bg-[#FBA311] w-fit text-white uppercase font-semibold text-xs p-4 rounded-lg cursor-pointer">
              Request a free demo
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

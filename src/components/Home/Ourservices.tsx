"use client";
import { servicesection } from "@/utils/services/index2";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Ourservices() {
  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:main-container px-4 py-10 space-y-10">
      {/* Heading Section */}
      <div className="text-center font-bold space-y-5">
        <h1 className="text-3xl lg:text-4xl">Our Services</h1>
        <h2 className="text-4xl lg:text-6xl">Corporate Service</h2>
      </div>

      {/* Slider Section */}
      <div className="slider-container py-8">
        <Slider {...settings}>
          {servicesection.map((service) => (
            <div key={service.id} className="px-2">
              <div className="bg-white h-full rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 md:h-56 lg:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-navy-blue">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <a
                    href="#"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

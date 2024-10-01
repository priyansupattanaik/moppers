import { blogSection } from "@/utils/blog";
import React from "react";
import Image from "next/image";
import { servicesection } from "@/utils/services/index2";

export default function Ourservices() {
  return (
    <div className="lg:main-container px-4 py-16">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <div className="flex items-center text-center gap-5 uppercase font-semibold text-sm">
          <span className="h-px w-12 bg-gray-400"></span>
          <div className="text-[#001837]">OUR SERVICES</div>
          <span className="h-px w-12 bg-gray-400"></span>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center">
            We are providing all kind
            <br /> of cleaning services
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesection.map((serv) => (
          <div
            key={serv.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={serv.image}
              alt={serv.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {serv.title}
              </h3>
              <div className="flex items-center">
                <div className="flex gap-2 items-center">
                  <p className="text-gray-400 italic">Starting from</p>
                  <p className="text-gray-500 text-sm font-semibold">
                    {serv.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

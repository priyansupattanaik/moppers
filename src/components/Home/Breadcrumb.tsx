import React from "react";
import Image from "next/image";
import bgImage from "@/assets/mopper-2-header.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Breadcrumb() {
  return (
    <section className="relative w-full h-[700px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true} // ensures optimized image loading
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90 z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 w-full lg:main-container flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 h-full">
        {/* Left Section (Text) */}
        <div className="text-white space-y-4 lg:space-y-8 max-w-lg lg:text-left">
          <div className="text-lg font-semibold flex justify-center lg:justify-start items-center gap-2">
            Welcome to MR Corporate
          </div>

          <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl leading-relaxed">
            Professional Facility Management <br />
            Solutions
          </h1>

          <p className="text-sm lg:text-base font-light opacity-80">
            Top-notch, quality facility management solutions to government &
            private sectors across various domains.
          </p>

          <button className="flex justify-center lg:justify-start items-center gap-3 md:gap-5 bg-yellow-600 text-white uppercase text-xs font-bold px-6 py-3 rounded hover:-translate-y-1 transition-transform duration-300">
            Contact Us
            <ArrowForwardIcon className="text-lg text-white" />
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white shadow-lg w-full lg:w-1/3 rounded-lg p-6 md:p-8 lg:p-10 space-y-6 mt-8 lg:mt-0">
          <h1 className="text-black font-semibold text-center text-lg md:text-xl">
            Book a Service
          </h1>

          <form>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-semibold"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="block text-sm md:text-base bg-gray-100 w-full p-2 md:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm md:text-base font-semibold"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="block text-sm md:text-base bg-gray-100 w-full p-2 md:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+1 ( ___ ) ___ - ___ - ____"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm md:text-base font-semibold"
                >
                  Choose a Service
                </label>
                <select
                  id="service"
                  className="block text-sm md:text-base bg-gray-100 w-full p-2 md:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option>Residential Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Construction Cleaning</option>
                  <option>Windows Cleaning</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

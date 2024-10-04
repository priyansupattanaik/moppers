import React from "react";
import aboutsectionImg from "@/assets/moppers-about-section.jpg";
import { cardData } from "@/utils/about";

export default function Aboutus() {
  return (
    <div className="bg-white w-full h-fit space-y-10">
      <div className="lg:main-container px-4 py-10 space-y-5">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-5 items-center">
            <div className="flex items-center gap-5 uppercase font-semibold text-sm">
              <span className="h-px w-12 bg-gray-400"></span>
              <div className="uppercase text-[#001837]">About us</div>
            </div>
            <h1 className="text-3xl lg:text-5xl text-[#001837] font-bold">
              Elevating Corporate Environments Through Professional Cleaning
              Solutions.
            </h1>

            <p className="text-lg lg:text-lg text-gray-500 font-extralight">
              MR Corporate Facilities Services is an independent leader in
              delivering integrated facilities management services across all
              over India. For more than 12 years, MR Corporate is well
              acknowledged by all for providing quality services to some of the
              biggest regional names including leading multinationals in the
              region.
            </p>
            <p className="text-base lg:text-lg text-gray-500 font-extralight">
              Since 2009, the company has expanded its diversified clientele
              through its services offering across the region. Our teams are
              experienced in delivering single, multi, or total facilities
              management services to clients of all sizes from all market
              sectors so you can be assured we will always deliver a superior
              and reliable service to our clients. Our goal is to provide you
              with working environments that are clean, comfortable, efficient,
              and safe. We self-perform a full suite of facility services.
            </p>

            <h1 className="text-3xl lg:text-5xl text-[#001837] font-bold">
              Our Mission
            </h1>
            <p className="text-base lg:text-lg text-gray-500 font-extralight">
              To be the leading integrated facilities management service
              provider across PAN India, by adopting technology and innovation,
              which satisfies the needs and exceeds the expectations of our
              clients, business partners, and other stakeholders.
            </p>

            {/* <img
              src="https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2019/12/moppers-about-signature.png"
              alt="Signature"
              className="w-28 lg:w-36 "
            /> */}
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={aboutsectionImg.src}
              alt="About Section"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="h-px w-full lg:bg-gray-300"></div>

        <div className="py-5 space-y-5">
          <h1 className="font-bold text-4xl text-center">HOW WE WORK</h1>
          <h2 className="font-bold text-5xl text-center">
            Our Working Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Fill The Form",
                description:
                  "Fill up the form details which will help us to know our customer.",
                color: "bg-blue-500",
              },
              {
                number: "02",
                title: "Book An Appointment",
                description:
                  "Schedule a date & time for us to know the exact requirements.",
                color: "bg-orange-500",
              },
              {
                number: "03",
                title: "Site-Survey",
                description:
                  "Our team will make a survey & estimate client requirements.",
                color: "bg-green-500",
              },
              {
                number: "04",
                title: "Get Services",
                description:
                  "We will provide the services as per client requirements.",
                color: "bg-blue-700",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div
                    className={`rounded-full ${step.color} text-white flex items-center justify-center w-14 h-14 mb-6`}
                  >
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="space-y-5 p-8">
                <div className="flex">
                  <img src={card.icon} alt={card.title} className="w-14 h-14" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#1C1959] text-left">
                  {card.title}
                </h3>
                <p className="text-left text-gray-500">{card.description}</p>
              </div>

              <div className="bg-[#fbbf24] h-2 w-full rounded-b-lg"></div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

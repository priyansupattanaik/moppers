import React from "react";
import mopperImg from "@/assets/mopper-features.jpg";
import wipingHand from "@/assets/wiping-gloves-black-pair.png";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Experienced Staff",
      description:
        "Professional and experienced staff ready to help you anytime.",
    },
    {
      title: "Natural Product",
      description:
        "We only use natural products in the process. No harmful chemicals are used.",
    },
    {
      title: "Fast Service",
      description:
        "Set your schedule and get the regular and faster cleaning every day.",
    },
    {
      title: "Best Equipment",
      description:
        "We use the best and world-class equipment for the cleaning process.",
    },
  ];

  return (
    <div className="lg:main-container px-4 w-full py-10 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1">
        <img
          src={mopperImg.src}
          alt="Mopper Features"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="flex-1 space-y-10 w-auto">
        <div className="space-y-5 px-5">
          <div className="flex items-center gap-5 uppercase font-semibold text-sm">
            <span className="h-px w-12 bg-[#667487]"></span>
            <h1 className="text-[#001837]">Why Choose Us</h1>
          </div>
          <h2 className="text-4xl font-semibold text-[#001837]">
            Amazing Benefits with Us
          </h2>
          <p className="text-[#565656]">
            Shall under in yielding saying given dominion don't of two god which
            said. Creature dominion was the good creepeth to give bring doesn't
            first shall two signs is a gathered set of people.
          </p>
          <button className="text-[#6F8BF8] underline">
            Book a Service Now
          </button>
        </div>

        <div className="h-px w-full lg:bg-[#EEEEEE]" />

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {benefits.map((item, index) => (
            <div key={index} className="flex gap-5">
              <div className="p-3 bg-[#FBBF24] h-fit w-fit lg:w-20 rounded-full">
                <img
                  src={wipingHand.src}
                  className="size-6 filter invert brightness-0"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[#001837] text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-[#565656]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

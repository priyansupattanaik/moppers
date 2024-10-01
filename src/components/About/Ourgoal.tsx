import React from "react";
import aboutsectionImg from "@/assets/moppers-about-section.jpg";
import { cardData } from "@/utils/about";

export default function Ourgoal() {
  return (
    <div className="bg-white w-full h-fit space-y-10">
      <div className="lg:main-container px-4 py-10 space-y-5">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-5 items-center">
            <div className="flex items-center gap-5 uppercase font-semibold text-sm">
              <span className="h-px w-12 bg-gray-400"></span>
              <div className="uppercase text-[#001837]">our goal</div>
            </div>
            <h1 className="text-3xl lg:text-4xl text-[#001837] font-bold">
              It all started with just
              <br /> three people
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 font-extralight">
              Open void divide light divide void his after them
              <br /> midst, I spirit Grass replenish image behold which
              <br /> fourth form his yielding him seas hath you.
            </p>
            <p className="text-base lg:text-md text-gray-700 font-extralight">
              There creepeth darkness him wherein a signs face unto best seasons
              female they're dominion. Brought gathered whales was. He has
              creepeth she'd own winged one was behold one his also called over
              all don't fill. Also green Green said fifth moveth whose is.
              Gathering fourth after signs also our land sea firmament called
              greater good.
            </p>
            <img
              src="https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2019/12/moppers-about-signature.png"
              alt="Signature"
              className="w-28 lg:w-36 "
            />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
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
        </div>
      </div>
    </div>
  );
}

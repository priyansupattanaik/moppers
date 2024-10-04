import React from "react";
import Link from "next/link";
import moppersLogo from "@/assets/moppers-logo.png";
import mrLogo from "@/assets/mrcorporate-logo.png";
import { navBar } from "@/utils/navbar";

export default function Header2() {
  return (
    <header className="w-auto h-auto lg:flex py-5 main-container justify-between hidden">
      <div className="flex justify-between gap-10">
        <div>
          <img src={mrLogo.src} alt="Moppers Logo" className="w-auto h-12" />
        </div>
        <div className="flex  items-center gap-5 font-sans font-semibold">
          {navBar.map((navItem) => (
            <Link key={navItem.id} href={navItem.path}>
              <div className="capitalize hover:text-blue-500 transition duration-300">
                {navItem.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between uppercase items-center gap-4 font-semibold font-sans text-sm">
        <div className="border-2 border-gray-100 text-[#6382F7] p-4 rounded-lg cursor-pointer hover:border-[#6382F7] transition duration-300">
          get quote
        </div>
        <div className="bg-[#6382F7] text-white p-4 rounded-lg cursor-pointer">
          book free demo
        </div>
      </div>
    </header>
  );
}

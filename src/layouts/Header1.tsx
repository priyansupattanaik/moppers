import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Header1() {
  return (
    <header className="bg-[#F7F7F7] w-full h-12 font-sans lg:flex justify-between hidden">
      <div className="main-container flex justify-between">
        <div className="flex items-center gap-5 font-semibold text-xs ">
          <div className="flex gap-2 items-center">
            <LocalPhoneIcon className="text-[#6382F7] text-xl" />
            <span className="text-sm">+91-8327759341</span>
          </div>
          <div className="flex gap-2 items-center">
            <WatchLaterIcon className="text-[#6382F7] text-xl" />
            <span className="text-sm">
              Mon - Fri: 9:00 - 19:00 / Closed on Weekends
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <EmailIcon className="text-[#6382F7] text-xl" />
            <span className="text-sm">info@mrcorporate.in</span>
          </div>
          <div className="flex gap-2 items-center">
            <LocationOnIcon className="text-[#6382F7] text-xl" />
            <span className="text-sm">Bhubaneswar</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-2xl text-slate-500 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-black">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </header>
  );
}

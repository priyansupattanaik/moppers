import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Header1() {
  return (
    <header className="bg-[#F7F7F7] w-full h-12 font-sans lg:flex px-36 mx-auto justify-between hidden">
      <div className="flex items-center gap-5 font-semibold text-xs">
        <div className="flex gap-2">
          <LocalPhoneIcon className="text-[#6382F7] text-xl" />
          <span> + (123) 1800-567-8990</span>
        </div>
        <div className="flex gap-2">
          <WatchLaterIcon className="text-[#6382F7] text-xl" />
          <span>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</span>
        </div>
        <div className="flex gap-2">
          <EmailIcon className="text-[#6382F7] text-xl" />
          <span>office@example.com</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-slate-500 ">
        <FacebookIcon className="hover:text-black text-2xl" />
        <TwitterIcon className="hover:text-black text-2xl" />
        <InstagramIcon className="hover:text-black text-2xl" />
      </div>
    </header>
  );
}

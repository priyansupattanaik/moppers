import React from "react";
import Link from "next/link";
import footerLogo from "@/assets/slcr-logo-footer.svg";
import { navBar } from "@/utils/navbar";
import { servicesFooter } from "@/utils/services";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import mrcorporatefooterLogo from "@/assets/mrcorporate-footer-logo.png";
import { posts } from "@/utils";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { companyFooter } from "@/utils/footer/indexCompany";
import { importantFooter } from "@/utils/footer/indexImportant";
import { quicklinksFooter } from "@/utils/footer/indexQuicklinks";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function Footer3() {
  return (
    <>
      <section className="bg-[#1C1959] w-full h-fit py-10">
        <div className="lg:main-container px-2">
          <div className=" grid grid-cols-1 lg:grid-cols-5 lg:gap-1">
            <div className="space-y-5">
              <img
                src={mrcorporatefooterLogo.src}
                className="w-40 filter invert"
                alt="Moppers Logo"
              />
              <p className="text-gray-500">
                One Stop Solutions For All Your Facility Management Needs
              </p>
              <p className="text-gray-500">
                Email us at:{" "}
                <span className="text-blue-400">info@mrcorporate.in</span>
              </p>

              <div className="flex gap-2 text-gray-500 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-white">
                Follow us:
                <FacebookIcon />
                <TwitterIcon />
                <PinterestIcon />
                <LinkedInIcon />
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">COMPANY</h1>
              <div className="flex flex-col gap-3">
                {companyFooter.map((companyItem) => (
                  <Link key={companyItem.id} href={companyItem.path}>
                    <div className="text-gray-500 capitalize hover:text-white transition duration-300">
                      {companyItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">IMPORTANT</h1>
              <div className="flex flex-col gap-3">
                {importantFooter.map((importantItem) => (
                  <Link key={importantItem.id} href={importantItem.path}>
                    <div className="text-gray-500 capitalize hover:text-white transition duration-300">
                      {importantItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">QUICK LINKS</h1>
              <div className="flex flex-col gap-3">
                {quicklinksFooter.map((quiclinkItem) => (
                  <Link key={quiclinkItem.id} href={quiclinkItem.path}>
                    <div className="text-gray-500 capitalize hover:text-white transition duration-300">
                      {quiclinkItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">OFFICIAL INFO</h1>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2 text-gray-500">
                  <LocationOnIcon />
                  <p className=" hover:text-white transition duration-300">
                    Head Office : Plot No. 42, Ground Floor, 12 Mile Stone
                    Patrapada, Bhubaneswar, Odisha, 751019
                  </p>
                </div>
                <div className="flex gap-2 text-gray-500">
                  <MailOutlineIcon />
                  <p className=" hover:text-white transition duration-300">
                    Email: info@mrcorporate.in
                  </p>
                </div>
                <div className="flex gap-2 text-gray-500">
                  <LocalPhoneIcon />
                  <p className=" hover:text-white transition duration-300">
                    Phone: +91-8327759341
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1959] w-full h-fit">
        <div className="h-px w-full bg-gray-600"></div>
        <div className="lg:main-container px-4">
          <div className="text-center text-white text-sm py-5">
            © 2024 - Moppers. All Rights Reserved | Corporate website by Moppers
          </div>
        </div>
      </section>
    </>
  );
}

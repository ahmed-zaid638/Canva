"use client";
import { BadgeHelp, ChevronDown, MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BusinessModal from "../modals/header/BusinessModal";

function Header() {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);
  const navLinks = [
    {
      name: "Designs",
      path: "/designs",
    },
    {
      name: "Templates",
      path: "/templates",
    },
    {
      name: "Templates",
      path: "/templates",
    },
    {
      name: "Templates",
      path: "/templates",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="border-b h-20 w-full flex shadow-sm fixed top-0 z-50 bg-white">
      <div className="w-full flex justify-between gap-4 items-center px-4 py-3 ">
        <div className="flex gap-3 ">
          {/* logo  */}
          <div className="flex  gap-2 items-center w-28 ">
            <MenuIcon className="block md:hidden" />
            <Image
              src={"/images/logo.svg"}
              className=" "
              alt={""}
              width={80}
              height={80}
            />
          </div>
          {/* nav links */}
          <nav className="hidden lg:flex">
            {navLinks.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={`relative flex gap-1 items-center rounded-md hover:bg-slate-100 px-3 py-2`}
                  onMouseEnter={() => setModalOpenIndex(index)}
                  onMouseLeave={() => setModalOpenIndex(null)}
                >
                  <div className=""> {item.name}</div>
                  <ChevronDown size={"18px"} />

                  <BusinessModal open={index === modalOpenIndex ? index : 0} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* right side  */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="p-2 hover:bg-slate-100 rounded-lg">
            <Search />
          </div>
          <div className="p-2 hover:bg-slate-100 rounded-lg">
            <BadgeHelp />
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded-md font-semibold  text-[#0d1216] hover:bg-[#24313d14] ">
              Login
            </button>
            <button className="px-4 py-2  rounded-md font-semibold  bg-[#8b3dff] text-white hover:opacity-70 ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

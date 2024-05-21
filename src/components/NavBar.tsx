import React from "react";
import IconLogo from "../../public/Vector-light-2.svg";
import IconLogoBlack from "../../public/Vector-black.svg";

import Image from "next/image";
import { MdGite, MdSegment } from "react-icons/md";
export default function NavBar() {
  return (
    <>
      <div className=" md:hidden flex items-center justify-between  ">
        <Image
          src={IconLogoBlack}
          width={35}
          height={35}
          alt="Logo for Website"
        />
        <button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
          >
            <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
          </svg>
        </button>
      </div>

      <div className=" container hidden bg-black   md:flex items-center justify-between  rounded-full text-white ">
        <div>
          <nav>
            <ul className="flex px-3 gap-10 py-2 ">
              <li className=" bg-[#8470b4] py-3  rounded-3xl px-6">Home</li>
              <li className=" py-3  rounded-3xl px-6">About</li>
              <li className=" py-3  rounded-3xl px-6">Blog</li>
            </ul>
          </nav>
        </div>
        <div className=" bg-[#8470b4] p-2 rounded-full w-[3rem] flex gap-3 items-center">
          <Image
            src={IconLogo}
            width={35}
            height={35}
            alt="Logo for Website"
            sizes="100vw"
            className="p-2 "
          />
          <h2 className=" font-semibold"></h2>
        </div>
        <nav>
          <ul className="flex px-3 gap-10 py-2 ">
            <li className=" py-3  rounded-3xl px-6">Home</li>
            <li className=" py-3  rounded-3xl px-6">About</li>
            <li className=" py-3  rounded-3xl px-6">Blog</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

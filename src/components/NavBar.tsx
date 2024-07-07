import React from "react";
import IconLogo from "../../public/assest/images/Vector-light-2.svg";
import IconLogoBlack from "../../public/assest/images/Vector-black.svg";
import Link from "next/link";
import Image from "next/image";
import { MdGite, MdSegment } from "react-icons/md";
export default function NavBar() {
  return (
    <>
      <div className="lg:hidden flex   items-center justify-between  ">
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

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.40)",
          backdropFilter: "blur(47.5px) ",
        }}
        className=" hidden lg:flex border sticky top-8 z-50 shadow-2xl w-[900px] mx-auto  mb-7 bg-white items-center justify-between  rounded-full text-slate-600 "
      >
        <nav>
          <ul className="flex px-3 gap-10 py-2 ">
            <li className="py-3  rounded-3xl px-6 bg-[#8470b4] text-white">
              Home
            </li>
            <Link href={"#about-me"}>
              <li className=" py-3  rounded-3xl px-6 ">About</li>
            </Link>
            <Link href={"#blog"}>
              <li className=" py-3  rounded-3xl px-6">Exprience</li>
            </Link>
          </ul>
        </nav>
        <Link href={"/"}>
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
        </Link>

        <nav>
          <ul className="flex px-3 gap-10 py-2 ">
            <Link href="/pdf-viewer" passHref>
              <li className="py-3 rounded-3xl px-6">Skills</li>
            </Link>

            <Link href="#project">
              {" "}
              <li className=" py-3  rounded-3xl px-6">Project</li>
            </Link>
            <Link href="#contact">
              {" "}
              <li className=" py-3  rounded-3xl px-6">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

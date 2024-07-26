"use client";

import React from "react";
import IconLogo from "../../public/assest/images/Vector-light-2.svg";
import IconLogoBlack from "../../public/assest/images/Vector-black.svg";
import Link from "next/link";
import Image from "next/image";
import { MdGite, MdSegment } from "react-icons/md";
import { useState } from "react";
export default function NavBar() {
  const [active, setActive] = useState("home");

  return (
    <>
      <div className="lg:hidden flex  items-center justify-between  ">
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
        className=" hidden lg:flex border sticky top-8 z-50 shadow-2xl w-[600px] mx-auto  mb-7 bg-white items-center justify-between  rounded-full text-slate-600 "
      >
        <nav>
          <ul className="flex px-3 gap-10 py-2 ">
            <Link href={"/"}>
              <li
                className={`py-3  rounded-3xl px-6`}
                style={{
                  background: active === "home" ? "#8470b4" : "",
                  color: active === "home" ? "white" : "",
                }}
                onClick={() => setActive("home")}
              >
                Home
              </li>
            </Link>
            <Link href={"#about-me"}>
              <li
                className=" py-3  rounded-3xl px-6 "
                style={{
                  background: active === "#about-me" ? "#8470b4" : "",
                  color: active === "#about-me" ? "white" : "",
                }}
                onClick={() => setActive("#about-me")}
              >
                About
              </li>
            </Link>
            {/* <Link href={"#expreince"}>
              <li
                className=" py-3  rounded-3xl px-6"
                style={{
                  background: active === "#expreince" ? "#8470b4" : "",
                  color: active === "#expreince" ? "white" : "",
                }}
                onClick={() => setActive("#expreince")}
              >
                Exprience
              </li>
            </Link> */}
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
            <Link href="#skill">
              <li
                className="py-3 rounded-3xl px-6"
                style={{
                  background: active === "#skill" ? "#8470b4" : "",
                  color: active === "#skill" ? "white" : "",
                }}
                onClick={() => setActive("#skill")}
              >
                Skills
              </li>
            </Link>

            <Link href="#project">
              {" "}
              <li
                className=" py-3  rounded-3xl px-6"
                style={{
                  background: active === "#project" ? "#8470b4" : "",
                  color: active === "#project" ? "white" : "",
                }}
                onClick={() => setActive("#project")}
              >
                Project
              </li>
            </Link>
            {/* <Link href="#contact">
              {" "}
              <li
                className=" py-3  rounded-3xl px-6"
                style={{
                  background: active === "#contact" ? "#8470b4" : "",
                  color: active === "#contact" ? "white" : "",
                }}
                onClick={() => setActive("#contact")}
              >
                Contact
              </li>
            </Link> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

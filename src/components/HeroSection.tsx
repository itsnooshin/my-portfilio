import React from "react";
import Image from "next/image";
import IconTop from "../../public/Vector-hello.png";
import IconBottom from "../../public/Vector-purple-title.png";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Skills from "@/components/skills";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import { PiTelegramLogo } from "react-icons/pi";

import { LuTwitter } from "react-icons/lu";

export default function HeroSection() {
  return (
    <>
      <div className="h-[40%] relative pt-1 mt-5 md:w-[10%] w-[30%] mx-auto">
        <div className="mt-5 flex justify-center items-center flex-col ">
          <div className="border border-black px-4 py-1 rounded-full">
            <p>Hello!</p>
            <Image
              src={IconTop}
              width={30}
              height={30}
              alt="icon"
              className=" absolute top-0 right-0 "
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center mt-5 mx-auto md:w-[35%] w-[100%] relative  ">
        <h2 className=" font-[600] text-[2rem]">
          I'm <span className=" text-[#8470b4]">Nooshin</span>
        </h2>
        <h2 className=" font-[600] text-[2rem]  ">A front End Developer</h2>
        <Image
          src={IconBottom}
          width={30}
          height={30}
          alt="icon"
          className="absolute  md:left-0 md:bottom-0 bottom-0 left-0 "
        />
      </div>

      <p className=" pt-14 md:text-center md:w-[70%] mx-auto text-center w-[100%] md:text-[1.2rem]">
        front-end developer skilled in <strong>JavaScript</strong>,{" "}
        <strong> Reactjs</strong> , and <strong>Next.js</strong> , seeking a
        collaborative environment to create user-friendly web applications.
        Experienced in volunteering and project management, demonstrating good
        problem-solving and adaptability.
      </p>
      {/* div of socoal network */}
      <div className=" flex gap-10 items-center md:mt-24 mt-10 justify-center ">
        <FiGithub size={"20px"} />
        <FaLinkedinIn size={"20px"} />
        <PiTelegramLogo size={"20px"} />
        <LuTwitter size={"20px"} />
      </div>
    </>
  );
}

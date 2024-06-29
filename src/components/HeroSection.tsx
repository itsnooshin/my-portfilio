import React from "react";
import Image from "next/image";
import IconTop from "../../public/assest/images/Vector-hello.png";
import IconBottom from "../../public/assest/images/Vector-purple-title.png";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { PiTelegramLogo } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";

import handIcon from "../../public/assest/images/Waving Hand.png";

import { LuTwitter } from "react-icons/lu";

export default function HeroSection() {
  return (
    <>
      <section className="mb-44">
        <div className=" pt-1 md:w-[100%]  mx-auto">
          <div className=" flex justify-center items-center flex-col ">
            <div className=" px-5  rounded-full relative  pt-6">
              <div className="flex gap-2 border border-black py-[0.7rem] px-4 rounded-full ">
                <p>Hello! </p>
                <Image
                  src={handIcon}
                  width={20}
                  height={20}
                  alt="icon"
                  className=" object-cover"
                />
              </div>
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

        <div className="flex flex-col items-center mt-5  justify-center  ">
          <h2 className="  text-[1.9rem] md:text-[2.5rem]  font-recoleta">
            I&apos;m <span className=" text-[#8470b4]">Nooshin</span>
          </h2>
          <div className=" relative  flex  text-center">
            <h2 className="  text-[1.6rem] md:px-10 px-10  md:text-[2.5rem] font-recoleta md:w-full   ">
              A front End Developer
            </h2>

            <Image
              src={IconBottom}
              width={30}
              height={30}
              alt="icon"
              className="absolute left-0 bottom-0"
            />
          </div>
        </div>

        <p className=" pt-14 md:text-center md:w-[70%] mx-auto text-center w-[100%] md:text-[1.2rem]">
          front-end developer skilled in <strong>JavaScript</strong>,{" "}
          <strong> Reactjs</strong> , and <strong>Next.js</strong> , seeking a
          collaborative environment to create user-friendly web applications.
          Experienced in volunteering and project management, demonstrating good
          problem-solving and adaptability.
        </p>

        <div className=" flex gap-10 items-center md:mt-24 mt-10 justify-center ">
          <Link href={"https://github.com/itsnooshin"}>
            <FiGithub size={"20px"} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nooshin-bakhtiari-62378520b/"}
          >
            <FaLinkedinIn size={"20px"} />
          </Link>
          <Link href={"https://t.me/itsnooshin_96"}>
            <PiTelegramLogo size={"20px"} />
          </Link>
          <Link href={"https://x.com/imnooshin"}>
            <LuTwitter size={"20px"} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-10 gap-5">
          <button className=" bg-[#9370B4] px-4 md:text-[1.1rem]  p-3 md:py-2 md:px-5 rounded-full text-white">
            Contact me here <span>&#8594;</span>
          </button>
          <button className="  bg-white p-3 md:py-2 md:text-[1.1rem] md:px-5 rounded-full text-black shadow-2xl border">
            Download Resume
            <span className=" pl-1">&#8595;</span>
          </button>
        </div>
      </section>
    </>
  );
}

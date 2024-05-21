import Image from "next/image";

import { MdGite, MdSegment } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdBrightness3 } from "react-icons/md";
import IconLogo from "../../public/vector-light.svg";
import Profile from "../../public/Group.png";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Skills from "@/components/skills";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import bgCover from "../../public/Frame-65.png";
import COverImage from "../../public/layer-888.png";
import IconBottom from "../../public/Vector-purple-title.png";
import IconTop from "../../public/Vector-hello.png";
import SkillsData from "@/components/SkillsData";
import MyProjects from "@/components/MyProjects";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <>
      {/* N.B */}

      <div className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        
        <div className="relative z-30 md:px-16 px-10 md:py-10 py-8">
          <NavBar />
          <HeroSection />
        </div>
        <div className="mt-20 pt-1  md:h-[30rem] h-[30rem]  md:rounded-t-[60px] md:rounded-b-[60px] md:rounded-sm rounded-t-[60px] ">
          <div className=" relative pt-1 mt-10 md:w-[10%]  w-[30%] mx-auto ">
            <div className="mt-5 flex justify-center items-center flex-col ">
              <div className="border border-black px-4 py-2  rounded-full text-black">
                <p className="text-[1.1rem]">My Skills</p>

                <Image
                  src={IconTop}
                  width={30}
                  height={30}
                  alt="icon"
                  className=" absolute top-0 right-0 "
                />
              </div>

              {/* images */}
            </div>
          </div>
          <div>
            <h2 className="px-10 md:font-[600] font-[600] md:text-[1.5rem] text-[1.5rem] text-center md:text-center mt-6">
              <span className="">Some of the</span>
            </h2>
            <h2 className="text-center md:text-center md:font-[600] font-[600] md:text-[1.6rem] text-[1.6rem] ">
              <span className="text-[#8470b4]">Technology</span> I have use
            </h2>
            <SkillsData />
          </div>

          <div className=" px-20  hidden md:block">
            <div className=" flex items-center justify-between ">
              <div className="flex flex-col w-[700px]">
                <p className="text-white text    text-[1rem]"></p>
              </div>
            </div>
          </div>
          <div className="  px-10 block md:hidden text-center leading-6">
            <div className=" flex flex-col items-center justify-between ">
              <div className="flex flex-col w-full">
                <p className="text-white text text-[1rem]"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="relative pt-1 mt-5 md:w-[12%] w-[30%] mx-auto">
            <div className="mt-5 flex justify-center items-center flex-col ">
              <div className="border border-black px-4 py-1 rounded-full">
                <p>My Projects</p>
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
          {/* My projects */}
          <MyProjects />
        </div>
      </div>
    </>
  );
}

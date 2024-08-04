import React from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import useProject from "../hooks/useProjectData";
import TtitleSection from "./TitleSection";
import Link from "next/link";

export default function MyProjects() {
  const { projectData } = useProject();

  return (
    <section className="pt-44 pb-44" id="#project">
      <TtitleSection title="My Skills" />
      <div className="px-4 md:flex-row md:pt-10 md:pb-5  flex-col flex items-center justify-between">
        <div className="font-bold md:text-[2rem]  text-center pt-9 md:text-left text-[1.6rem] pb-7 ">
          <h2 className="font-recoleta md:font-bold font-bold ">
            Lets have a look at{" "}
          </h2>
          <h2 className="md:font-bold font-[600] text-[#8470b4]  md:text-[2rem] text-center md:text-left text-[1.6rem] ">
            My Projects
          </h2>
        </div>
        <Link href={'/'}>
          <button className="hidden md:block bg-[#8470b4] rounded-full text-white px-4 py-2">
            View All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projectData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-2xl border p-5 border-slate-100 rounded-xl"
          >
            <Link href={`/project/${item.title}`}>
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.title}
                className="object-cover mb-10"
              />
              <h3 className="font-bold">{item.TitleProject}</h3>
              <p>{item.text}</p>
            </Link>
            <div className="flex gap-2 mt-4">
              <Link href={item.linkURl}>
                <FaLink size={"20px"} />
              </Link>
              <Link href={item.linkGithub}>
                <FiGithub size={"20px"} />
              </Link>
            </div>
            <div className="mt-3">
              <div className="md:grid  md:grid-cols-3 flex flex-wrap  md:w-5/6 md:gap-y-2 md:gap-x-3 gap-3">
                {item.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white shadow-2xl border text-[0.8rem] md:text-[0.9rem] border-slate-200 rounded-lg md:p-1 p-2  text-center "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

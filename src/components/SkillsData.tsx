import React from "react";
import useProject from "@/hooks/useProjectData";
import Image from "next/image";
import TtitleSection from "./TitleSection";
export default function SkillsData() {
  const {SkillData} = useProject()
  return (
    <>
      <section className="mt-20" id="project">
        <TtitleSection title="My Skills" />
        <div className=" container md:w-full pt-10 w-[250px] mx-auto  md:flex justify-center gap-6  grid grid-cols-3	 ">
          {SkillData.map((item) => (
            <>
              <div
                key={item.id}
                className=" md:p-5 p-3 border rounded-3xl border-slate-200 shadow-2xl"
              >
                <Image
                  src={item.image}
                  width={60}
                  alt=""
                  height={60}
                  className=" object-cover"
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

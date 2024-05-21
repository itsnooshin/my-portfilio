import React from "react";
import { dataSkills } from "../../constant/ImageSkills";
import Image from "next/image";
export default function SkillsData() {
  return (
    <>
      <div className=" container md:w-full pt-10 w-[250px] mx-auto  md:flex justify-center gap-6  grid grid-cols-3	 ">
        {dataSkills.map((item) => (
          <>
            <div
              key={item.id}
              className=" md:p-4 p-2 border rounded-lg border-slate-200 shadow-2xl"
            >
              <Image
                src={item.image}
                width={70}
                alt=""
                height={70}
                className=" object-cover"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

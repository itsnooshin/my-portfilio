"use client";

import React from "react";
import useProject from "@/hooks/useProjectData";
import Image from "next/image";
import TtitleSection from "./TitleSection";
import { motion } from "framer-motion";
export default function SkillsData() {
  const { SkillData } = useProject();


  return (
    <>
      <section className="mt-20" id="project">
        <TtitleSection title="My Skills" />
        <div className=" container pt-10 md:w-full md:flex gap-6 mx-auto grid grid-cols-4 items-center   ">
          
            {SkillData.map((item) => (
              <>
                <div
                  key={item.id}
                  className="border-slate-200 shadow-2xl p-3 md:p-3 border rounded-3xl"
                >
                  <Image
                    src={item.image}
                    width={200}
                    alt=""
                    height={200}
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

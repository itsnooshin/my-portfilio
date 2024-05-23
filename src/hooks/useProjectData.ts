import ProjectDataTypes from "@/types/ProjectDataTypes";
import Modimal from "../../public/assest/images/midmal.png";
import Portfilio from "../../public/assest/images/hello-portfilio.png";
import Uploader from "../../public/assest/images/Thumbnail Import.png";
import SkillDataTypes from "@/types/PortfilioSkillsTypes";
import Typescript from "../../public/assest/images/typescript-plain.png";
import Javacript from "../../public/assest/images/icon-javscript.svg";
import Mui from "../../public/assest/images/materialui-original.png";
import Tailwind from "../../public//assest/images/tailwindcss-plain.png";
import React from "../../public//assest/images/react-original.png";
import Nextjs from "../../public//assest/images/nextjs-original.png";

const useProjectData = (): ProjectDataTypes => {
  return [
    {
      id: 0,
      image: Modimal,
      text: "Modimal is an E-Commerce clothing shop for women, developed by Nextjs and typescript. styled with Material UI",
      technology: ["React", "NextJs", "Tailwind", "Supabase", "TypeScript"],
    },
    {
      id: 1,
      image: Portfilio,
      text: "Modimal is an E-Commerce clothing shop for women, developed by Nextjs and typescript. styled with Material UI",
      technology: ["React", "NextJs", "Tailwind", "Supabase", "TypeScript"],
    },
    {
      id: 2,
      image: Uploader,
      text: "Modimal is an E-Commerce clothing shop for women, developed by Nextjs and typescript. styled with Material UI",
      technology: ["React", "NextJs", "Tailwind", "Supabase", "TypeScript"],
    },
  ];
};

const useSkills = (): SkillDataTypes => {
  return [
    {
      id: 0,
      image: Javacript,
    },
    {
      id: 1,
      image: Mui,
    },
    {
      id: 2,
      image: Typescript,
    },
    {
      id: 3,
      image: Tailwind,
    },
    {
      id: 4,
      image: React,
    },
    {
      id: 5,
      image: Nextjs,
    },
  ];
};

function useProject() {
  const projectData = useProjectData();
  const SkillData = useSkills();

  return { projectData, SkillData };
}

export default useProject;

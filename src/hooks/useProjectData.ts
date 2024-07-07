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
import GIT from "../../public//assest/images/Git.svg";
import Github from "../../public//assest/images/Github.png";
import HTML from "../../public//assest/images/HTML.svg";
import Css from "../../public//assest/images/css.svg";
import figma from "../../public//assest/images/figma.svg";
import bootstrap from "../../public//assest/images/bootstrappp.svg";
import redux from "../../public//assest/images/redux.svg";
const useProjectData = (): ProjectDataTypes => {
  return [
    {
      id: 0,
      title: "modimal",
      image: Modimal,
      text: "Modimal is an E-Commerce clothing shop for women, developed by Nextjs and typescript. styled with Material UI",
      technology: ["React", "NextJs", "Tailwind", "Supabase", "TypeScript"],
    },
    {
      id: 1,
      title: "portfilio",
      image: Portfilio,
      text: "Modimal is an E-Commerce clothing shop for women, developed by Nextjs and typescript. styled with Material UI",
      technology: ["React", "NextJs", "Tailwind", "Supabase", "TypeScript"],
    },
    {
      id: 2,
      title: "uploader",
      image: Uploader,
      text: "Modimal is an E-Commerce clothing shop for women, developed by Nextjs and typescript. styled with Material UI",
      technology: ["React", "NextJs", "Tailwind", "Supabase", "TypeScript"],
    },
  ];
};

const useSkills = (): SkillDataTypes => {
  return [
    {
      id: 1,
      image: HTML,
    },
    {
      id: 2,
      image: Css,
    },
    {
      id: 3,
      image: Javacript,
    },
    {
      id: 4,
      image: React,
    },
    {
      id: 5,
      image: redux,
    },
    {
      id: 6,
      image: Typescript,
    },
    {
      id: 7,
      image: Nextjs,
    },
    {
      id: 8,
      image: Mui,
    },

    {
      id: 9,
      image: Tailwind,
    },
    {
      id: 10,
      image: bootstrap,
    },

    {
      id: 11,
      image: GIT,
    },
    {
      id: 12,
      image: Github,
    },
    {
      id: 13,
      image: figma,
    },
  ];
};

function useProject() {
  const projectData = useProjectData();
  const SkillData = useSkills();

  return { projectData, SkillData };
}

export default useProject;

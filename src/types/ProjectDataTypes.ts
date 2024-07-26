import { StaticImageData } from "next/image";

interface PojectDataItem {
  id: number;
  image: StaticImageData;
  text: string;
  technology: string[];
  title: string;
  linkURl: string;
  linkGithub: string;
  TitleProject: string;
}

type ProjectDataTypes = PojectDataItem[];

export default ProjectDataTypes;

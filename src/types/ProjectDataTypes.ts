import { StaticImageData } from "next/image";

interface PojectDataItem {
  id: number;
  image: StaticImageData;
  text: string;
  technology: string[];
  title: string;
}

type ProjectDataTypes = PojectDataItem[];

export default ProjectDataTypes;

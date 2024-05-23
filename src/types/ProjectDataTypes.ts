import { StaticImageData } from "next/image";

interface PojectDataItem {
  id: number;
  image: StaticImageData;
  text: string;
  technology: string[];
}

type ProjectDataTypes = PojectDataItem[];

export default ProjectDataTypes;

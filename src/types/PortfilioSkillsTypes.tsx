import { StaticImageData } from "next/image";

interface SkillDataItem {
  id: number;
  image: StaticImageData;
}

type SkillDataTypes = SkillDataItem[];

export default SkillDataTypes;

import React, { PropsWithChildren } from "react";
import Image from "next/image";
import IconTop from "../../public/assest/images/Vector-hello.png";

interface Props {
  title: string;
}

export default function TtitleSection(props: PropsWithChildren<Props>) {
  const { title } = props;
  return (
    <div className=" pt-1 mt-10  md:w-[100%]  mx-auto">
      <div className=" flex justify-center items-center flex-col ">
        <div className=" px-5  rounded-full relative  pt-6">
          <div className="flex gap-2 border border-black py-[0.7rem] px-4 rounded-full ">
            <p>{title}</p>
          </div>
          <Image
            src={IconTop}
            width={30}
            height={30}
            alt="icon"
            className=" absolute top-0 right-0 "
          />
        </div>
      </div>
    </div>
  );
}

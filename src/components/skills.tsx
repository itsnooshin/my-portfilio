"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import { useSkillsData } from "../constat/useSkillsData";
import Image from "next/image";

export default function skills() {
  console.log(useSkillsData);

  return (
    <div className="w-[100%]">
      <Swiper
        slidesPerView={6.5}
        className="overflow-hidden"
        pagination={{ clickable: true }}
        modules={[Navigation, Scrollbar]}
      >
        {useSkillsData.map((item) => (
          <div key={item.id}>
            <SwiperSlide>
              <Image
                src={item.image}
                alt="item skills"
                width={40}
                height={40}
                style={{ objectFit: "cover", height: "auto" }}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

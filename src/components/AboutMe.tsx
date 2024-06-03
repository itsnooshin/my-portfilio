import TtitleSection from "./TitleSection";
import Image from "next/image";
import MyPhoto from "../../public/assest/images/my-photo.jpg";

export default function AboutMe() {
  return (
    <>
      <section id="about-me" className="mt-20 ">
        <TtitleSection title="About Me" />

        <div className=" md:h-[100vh] w-full  md:px-20 px-10">
          <div className="font-[600] md:text-[2rem]  text-center pt-9 md:text-left text-[1.6rem] pb-7 ">
            <h2 className="font-recoleta">Lets have a look at </h2>
            <h2 className=" font-recoleta text-[#8470b4]  md:text-[2rem] text-center md:text-left text-[1.6rem] ">
              Discover My Journey
            </h2>
          </div>
          <div className="  md:flex flex gap-6 md:flex-row   flex-col items-center justify-center md:items-center  md:justify-between">
            <div className=" md:w-[55%] w-[90%] text-center md:text-left">
              <p>
                My name is Nooshin, and I am a dedicated junior frontend
                developer with a deep love for design. Starting my journey in
                2022, I have been immersed in the world of web development,
                passionately creating digital products for various companies.
                From engaging marketing websites to complex enterprise
                solutions, my focus is always on delivering efficient, polished,
                and user-friendly experiences.
              </p>
              <p>
                In my early career, I have had the opportunity to work alongside
                incredibly talented individuals, contributing to digital
                solutions that meet the needs of both businesses and consumers.
                My background in design provides me with a unique perspective,
                allowing me to approach development with a keen eye for
                aesthetics and functionality.
              </p>
              <p>
                For me, frontend development is not just about coding;
                it&lsquo;s about crafting intuitive web applications that are
                accessible and enjoyable to use. By combining my design
                knowledge with technical skills, I strive to create products
                that offer a seamless and delightful user experience.
              </p>
            </div>
            
            <div className=" ">
              <Image
                src={MyPhoto}
                alt="my photo for hero section"
                width={400}
                height={400}
                className=" md:w-90 md:h-90 w-45 h-45 object-cover rounded-full shadow-2xl border-2 border-slate-400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

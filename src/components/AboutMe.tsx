import TtitleSection from "./TitleSection";
import Image from "next/image";
import MyPhoto from "../../public/assest/images/icon-profile.png";

export default function AboutMe() {
  return (
    <>
      <section id="about-me">
        <TtitleSection title="About Me" />

        <div className=" md:h-[100vh] w-full  md:px-20 px-5">
          <div className="font-[600] md:text-[2rem]  text-center pt-9 md:text-left text-[1.6rem] pb-7 ">
            <h2 className="text-[1.9rem] md:text-[2.5rem] md:font-bold font-light  font-recoleta">
              Lets have a look at{" "}
            </h2>
            <h2 className=" font-recoleta text-[#8470b4] font-medium md:font-bold  md:text-[2rem]  md:text-left text-[1.6rem] ">
              Discover My Journey
            </h2>
          </div>
          <div className="  md:flex flex gap-6 md:flex-row   flex-col items-center justify-center md:items-center  md:justify-between">
            <div className=" md:w-[55%]  md:text-left">
              <p className="pb-5 text-left md:text-left md:text-[1.2rem]">
                I'm Nooshin, a frontend developer deeply passionate about
                design. Starting my journey in 2022, I've been fully immersed in
                web development, crafting digital products that blend creativity
                with functionality. I've had the privilege of collaborating with
                talented teams to deliver engaging marketing sites and robust
                enterprise solutions. With a background in design, I bring a
                unique perspective to development, focusing on aesthetics and
                user-friendly interfaces. Beyond coding, my goal is to create
                intuitive web applications that prioritize accessibility and
                user enjoyment. I believe in merging design sensibilities with
                technical expertise to craft seamless digital experiences.
              </p>
            </div>

            <div>
              <Image
                src={MyPhoto}
                alt="my photo for hero section"
                width={500}
                height={500}
                className=" md:w-90 md:h-90 w-45 h-45 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

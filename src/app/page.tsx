import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SkillsData from "@/components/SkillsData";
import MyProjects from "@/components/MyProjects";
import TtitleSection from "@/components/TitleSection";
import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        <div className="relative z-30 md:px-16 px-10 md:py-10 py-8">
          <NavBar />
          <HeroSection />
        </div>
        <AboutMe />
        <div className="mt-20 pt-1  md:h-[30rem] h-[30rem]  md:rounded-t-[60px] md:rounded-b-[60px] md:rounded-sm rounded-t-[60px] ">
          <TtitleSection title="My skills" />
          <div className="">
            <div className=" md:hidden block">
              <h2 className="text-center md:w-full mt-5  font-recoleta mx-auto md:mt-3 md:text-center md:font-[600] font-[600] md:text-[1.6rem] text-[1.6rem] ">
                <span className="text-[#8470b4]">Technology</span> which
              </h2>
              <h2 className="text-center md:w-full   font-recoleta mx-auto  md:text-center md:font-[600] font-[600] md:text-[1.6rem] text-[1.6rem] ">
                I use on Daily basis
              </h2>
            </div>
            <div className=" hidden md:block">
              <h2 className="text-center md:w-full mt-5  font-recoleta mx-auto md:mt-3 md:text-center md:font-[600] font-[600] md:text-[1.6rem] text-[1.6rem] ">
                <span className="text-[#8470b4]">Technology</span> which I use
                on Daily basis
              </h2>
            </div>
            <SkillsData />
          </div>

          <div className=" px-20  hidden md:block">
            <div className=" flex items-center justify-between ">
              <div className="flex flex-col w-[700px]">
                <p className="text-white text    text-[1rem]"></p>
              </div>
            </div>
          </div>
          <div className="  px-10 block md:hidden text-center leading-6">
            <div className=" flex flex-col items-center justify-between ">
              <div className="flex flex-col w-full">
                <p className="text-white text text-[1rem]"></p>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-20" id="project">
          <TtitleSection title="My Projects" />
          {/* My projects */}
          <MyProjects />
        </section>
      </div>

      <Blog />
    </>
  );
}

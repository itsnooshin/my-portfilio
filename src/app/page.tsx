import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SkillsData from "@/components/SkillsData";
import MyProjects from "@/components/MyProjects";
import TtitleSection from "@/components/TitleSection";
import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MainSection>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <SkillsData />
        <MyProjects />
        <Footer />
      </MainSection>
    </>
  );
}

import type { JSX } from "react";
import AboutMe from "../components/about/AboutMe.tsx";
import HorizontalLoopText from "../components/home/HorizontalLoopText";
import AnimateLogoContainer from "../components/shared/AnimateLogoContainer";
import BringYourProjects from "../components/shared/BringYourProjects";
import Footer from "../components/shared/Footer";
import PageHeroSection from "../components/shared/PageHeroSection";
import { aboutHeroData } from "../data/data.ts";

const AboutPage = (): JSX.Element => {
  return (
    <div>
      <AnimateLogoContainer>
        <PageHeroSection data={aboutHeroData} />
      </AnimateLogoContainer>
      <AboutMe />
      <HorizontalLoopText />
      <BringYourProjects />
      <Footer />
    </div>
  );
};

export default AboutPage;

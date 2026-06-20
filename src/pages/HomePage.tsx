import type { JSX } from "react";
import AboutWork from "../components/home/AboutWork";
import HeroSection from "../components/home/HeroSection";
import HighlightProjects from "../components/home/HighlightProjects";
import HorizontalLoopText from "../components/home/HorizontalLoopText";
import MyServices from "../components/home/MyServices";
import BringYourProjects from "../components/shared/BringYourProjects";
import Footer from "../components/shared/Footer";

const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <HighlightProjects />
      <AboutWork />
      <MyServices />
      <HorizontalLoopText />
      <BringYourProjects />
      <Footer />
    </>
  );
};

export default HomePage;

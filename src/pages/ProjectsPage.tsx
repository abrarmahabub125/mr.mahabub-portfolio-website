import type { JSX } from "react";
import HorizontalLoopText from "../components/home/HorizontalLoopText";
import AllProjects from "../components/projects/AllProjects";
import AnimateLogoContainer from "../components/shared/AnimateLogoContainer";
import BringYourProjects from "../components/shared/BringYourProjects";
import Footer from "../components/shared/Footer";
import PageHeroSection from "../components/shared/PageHeroSection";
import { projectsHeroData } from "../data/data.ts";

const ProjectsPage = (): JSX.Element => {
  return (
    <div>
      <AnimateLogoContainer>
        <PageHeroSection data={projectsHeroData} />
      </AnimateLogoContainer>
      <AllProjects />
      <HorizontalLoopText />
      <BringYourProjects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;

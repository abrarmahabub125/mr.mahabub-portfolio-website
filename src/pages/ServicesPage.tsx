import HorizontalLoopText from "../components/home/HorizontalLoopText";
import ServiceDetails from "../components/services/ServiceDetails.tsx";
import AnimateLogoContainer from "../components/shared/AnimateLogoContainer";
import BringYourProjects from "../components/shared/BringYourProjects";
import Footer from "../components/shared/Footer";
import PageHeroSection from "../components/shared/PageHeroSection";
import { servicesHeroData } from "../data/data.ts";

const ServicesPage = () => {
  return (
    <div>
      <AnimateLogoContainer>
        <PageHeroSection data={servicesHeroData} />
      </AnimateLogoContainer>
      <ServiceDetails />
      <HorizontalLoopText />
      <BringYourProjects />
      <Footer />
    </div>
  );
};

export default ServicesPage;

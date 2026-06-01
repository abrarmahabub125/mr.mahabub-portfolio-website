import type { JSX } from "react";
import ContactSection from "../components/contact/ContactSection.tsx";
import HorizontalLoopText from "../components/home/HorizontalLoopText";
import AnimateLogoContainer from "../components/shared/AnimateLogoContainer";
import BringYourProjects from "../components/shared/BringYourProjects";
import Footer from "../components/shared/Footer";
import PageHeroSection from "../components/shared/PageHeroSection";
import { contactsHeroData } from "../data/data.ts";

const ContactPage = (): JSX.Element => {
  return (
    <div>
      <AnimateLogoContainer>
        <PageHeroSection data={contactsHeroData} />
      </AnimateLogoContainer>
      <ContactSection />
      <HorizontalLoopText />
      <BringYourProjects />
      <Footer />
    </div>
  );
};

export default ContactPage;

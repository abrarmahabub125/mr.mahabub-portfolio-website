import type { JSX } from "react";
import Button from "../shared/Button";

const AboutWork = (): JSX.Element => {
  return (
    <div className="my-28 px-[calc((100vw-1150px)/2)]">
      <div className="flex flex-col items-center px-4 lg:items-start xl:px-0">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="mb-12 text-center text-lg font-medium lg:text-left lg:text-2xl lg:font-semibold"
        >
          Crafting modern and scalable{" "}
          <span className="from-brand to-primary bg-linear-120 bg-clip-text font-bold text-transparent">
            web applications
          </span>{" "}
          with the{" "}
          <span className="from-brand to-primary bg-linear-120 bg-clip-text font-bold text-transparent">
            MERN stack,
          </span>{" "}
          I’m passionate about turning ideas into powerful digital experiences.
          My goal is to{" "}
          <span className="from-brand to-primary bg-linear-120 bg-clip-text font-bold text-transparent">
            build fast, responsive, and user-focused solutions
          </span>{" "}
          that perfectly align with your vision and business needs.
        </h1>
        <Button label="Start a project" path="/contact-me" />
      </div>
    </div>
  );
};

export default AboutWork;

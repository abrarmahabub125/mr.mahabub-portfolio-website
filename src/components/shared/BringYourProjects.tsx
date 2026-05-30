import VideoLogo from "../../assets/video/MR_MAHABUB.webm";
import Button from "./Button";

const BringYourProjects = () => {
  return (
    <div className="my-28 px-[calc((100vw-1150px)/2)]">
      <div className="flex w-full flex-col items-center justify-center gap-y-4 px-4 lg:px-0">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="size-60 md:size-75 lg:size-100"
        >
          <video autoPlay muted loop playsInline controlsList="nodownload">
            <source src={VideoLogo} type="video/webm"></source>
          </video>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="to-brand from-primary bg-linear-120 bg-clip-text text-center text-2xl font-medium text-transparent lg:text-3xl"
          >
            Ready to bring your project to life?
          </h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="text-primary mt-4 text-center text-sm font-light lg:text-base lg:font-normal"
          >
            Tell me about your ideas and desires, let’s discuss them and work
            together!
          </p>
          <div className="mt-8">
            <Button label="Start a project" path="/contact-me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringYourProjects;

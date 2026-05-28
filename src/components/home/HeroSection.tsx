import VideoLogo from "../../assets/video/MR_MAHABUB.webm";
import Button from "../shared/Button";
import MouseScroll from "../shared/MouseScroll";
import WordLoader from "./WorldLoader";

const HeroSection = () => {
  return (
    <div className="h-full min-h-screen">
      {/* wrapper  */}
      <div className="h-full w-full">
        {/* container  */}
        <div className="relative h-full w-full overflow-hidden px-4 md:px-32 lg:px-48">
          {/* video  */}
          <div className="absolute -bottom-40 -left-44 -z-10 size-100 rotate-45 md:size-150 lg:size-auto">
            <video autoPlay muted loop playsInline controlsList="nodownload">
              <source src={VideoLogo} type="video/webm" />
            </video>
          </div>

          <div className="flex h-screen w-full flex-col items-center justify-center px-4 lg:px-0">
            <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 text-center md:gap-y-6 lg:w-lg lg:gap-y-8">
              <WordLoader
                words={["react", "node.js", "express.js", "mongodb", "UI/UX"]}
              />
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                className="to-brand from-primary via-primary bg-linear-60 from-0% via-35% to-100% bg-clip-text text-5xl font-semibold text-transparent uppercase md:text-6xl lg:text-7xl"
              >
                Mahabub
              </h1>
              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                className="text-primary text-xs/5 font-light md:text-sm lg:text-base"
              >
                I build fast, scalable and modern web applications using the
                MERN stack. From responsive frontend interfaces to secure
                backend systems, I create seamless digital experiences that are
                functional, efficient and user-focused.
              </p>
              <Button
                data-aos="fade-up"
                label={"Start a projects"}
                path={"/projects"}
              />
            </div>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="absolute bottom-24 left-1/2 -translate-x-1/2"
          >
            <MouseScroll />
          </div>
          {/* video  */}
          <div className="absolute -top-44 -right-44 -z-10 size-100 rotate-230 md:size-150 lg:size-auto">
            <video autoPlay muted loop playsInline controlsList="nodownload">
              <source src={VideoLogo} type="video/webm" />
            </video>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;

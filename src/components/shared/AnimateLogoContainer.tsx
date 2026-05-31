import { type ReactNode } from "react";
import VideoLogo from "../../assets/video/MR_MAHABUB.webm";

interface AnimateLogoContainerProps {
  children: ReactNode;
}

const AnimateLogoContainer = ({ children }: AnimateLogoContainerProps) => {
  return (
    <div className="relative h-125 w-full overflow-hidden">
      {/* video  */}
      <div className="absolute -bottom-40 -left-44 -z-10 size-100 rotate-45 md:size-150 lg:size-auto">
        <video autoPlay muted loop playsInline controlsList="nodownload">
          <source src={VideoLogo} type="video/webm" />
        </video>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        {/* content  */}
        {children}
      </div>
      {/* video  */}
      <div className="absolute -top-44 -right-44 -z-10 size-100 rotate-230 md:size-150 lg:size-auto">
        <video autoPlay muted loop playsInline controlsList="nodownload">
          <source src={VideoLogo} type="video/webm" />
        </video>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black to-transparent" />
    </div>
  );
};

export default AnimateLogoContainer;

import { useLottie } from "lottie-react";
import type { JSX } from "react";
import animationData from "../../assets/lottie/mouse-scroll.json";

function MouseScroll(): JSX.Element {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="size-6 md:size-8 lg:size-10">{View}</div>;
}

export default MouseScroll;

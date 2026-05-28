import { useLottie } from "lottie-react";
import animationData from "../../assets/lottie/mouse-scroll.json";

function MouseScroll() {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="size-6 md:size-8 lg:size-10">{View}</div>;
}

export default MouseScroll;

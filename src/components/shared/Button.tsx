import type { JSX } from "react";
import { Link } from "react-router";

type Btn = {
  label: string;
  path: string;
};

const Button = ({ label, path }: Btn): JSX.Element => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <Link
        to={path}
        className="bg-brand-secondary hover:bg-brand hover:text-primary-black text-primary inline-block w-fit rounded-full px-5 py-2.5 text-xs shadow-[0_0_15px_rgba(34,211,238,0.5)] backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-105 hover:font-medium md:text-sm lg:px-6 lg:py-3"
      >
        {label}
      </Link>
    </div>
  );
};

export default Button;

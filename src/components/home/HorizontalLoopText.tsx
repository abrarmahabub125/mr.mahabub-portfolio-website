import type { JSX } from "react/jsx-runtime";

const items: string[] = [
  "Creative Developer",
  "React & Next.js",
  "Comples UI/UX Designer",
  "Full Stack Engineer",
  "Problem Solver",
  "UI/UX Lover",
  "MERN Stack Developer",
];

const HorizontalLoopText = (): JSX.Element => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      className="mt-28 px-4 xl:px-[calc((100vw-1150px)/2)]"
    >
      {/* fade wrapper */}
      <div className="relative my-20 overflow-hidden">
        {/* left fade */}
        <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r to-transparent" />

        {/* right fade */}
        <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l to-transparent" />

        {/* marquee */}
        <div className="animate-marquee flex w-max">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-15 pr-15 whitespace-nowrap"
            >
              {items.map((item: string, index: number) => (
                <div key={index} className="flex items-center">
                  <h1 className="text-primary text-sm font-medium uppercase lg:text-base">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalLoopText;

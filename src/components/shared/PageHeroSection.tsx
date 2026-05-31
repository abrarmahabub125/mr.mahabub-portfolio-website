import { Link } from "react-router";
import { useFilter } from "../../hooks/useFilterContext";

interface PageHeroSectionProps {
  data: {
    pathLabel: string;
    heading: string;
    filters: string[];
  };
}

const PageHeroSection = ({ data }: PageHeroSectionProps) => {
  const { filterKey, setFilterKey } = useFilter();

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <div className="flex flex-col justify-center gap-y-4 px-4 lg:px-0">
        <h2 className="text-center text-lg font-medium uppercase lg:text-xl">
          <Link to="/">Home</Link>
          <span className="mx-2 text-2xl">&gt;</span>
          <span className="from-brand to-primary via-primary bg-linear-60 from-0% via-55% to-100% bg-clip-text text-transparent">
            {data.pathLabel}
          </span>
        </h2>

        <h1 className="to-brand from-primary via-primary bg-linear-60 from-0% via-35% to-100% bg-clip-text text-center text-4xl font-semibold text-transparent uppercase md:text-5xl lg:text-6xl">
          {data.heading}
        </h1>
      </div>

      <div className="mt-8 px-4 lg:px-0">
        <div className="flex max-w-2xl flex-wrap justify-evenly gap-4">
          {data.filters.map((item, idx) => {
            const isActive = item.toLowerCase() === filterKey.toLowerCase();

            return (
              <button
                key={idx}
                onClick={() => setFilterKey(item)}
                className={`cursor-pointer rounded-full border border-gray-400 px-4 py-2.5 text-xs whitespace-nowrap backdrop-blur-3xl transition-all duration-300 lg:px-5 lg:py-3 lg:text-sm ${
                  isActive
                    ? "bg-primary text-primary-black"
                    : "text-primary hover:bg-primary hover:text-primary-black"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageHeroSection;

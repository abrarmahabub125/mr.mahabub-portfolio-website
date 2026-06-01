import type { JSX } from "react";
import { projects } from "../../data/data";
import { useFilter } from "../../hooks/useFilterContext";
import Button from "../shared/Button";
import ProjectCard from "../shared/ProjectCard";

const AllProjects = (): JSX.Element => {
  const { filterKey } = useFilter();
  const filteredProject =
    filterKey === "All"
      ? projects
      : projects.filter((project) => project.category === filterKey);

  return (
    <div className="px-4 xl:px-[calc((100vw-1150px)/2)]">
      <div className="mt-8">
        <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="from-brand to-primary bg-linear-120 bg-clip-text text-2xl font-medium text-transparent lg:text-3xl"
          >
            All projects
          </h1>
          <Button label={"My services"} path="/services" />
        </div>

        {/* Projects grid  */}
        <div className="mt-12">
          <div className="grid w-full gap-8 md:grid-cols-2 md:grid-rows-2">
            {filteredProject.map((projects, idx) => (
              <ProjectCard key={idx} project={projects} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

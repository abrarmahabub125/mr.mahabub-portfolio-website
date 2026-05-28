import Button from "../shared/Button";
import ProjectCard from "../shared/ProjectCard";

const AllProjects = () => {
  return (
    <div className="px-[calc((100vw-1150px)/2)]">
      <div className="mt-8 px-4 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="from-brand to-primary bg-linear-120 bg-clip-text text-2xl font-medium text-transparent lg:text-3xl"
          >
            All projects
          </h1>
          <Button label={"All projects"} path="/projects" />
        </div>

        {/* Projects grid  */}
        <div className="mt-12">
          <div className="grid w-full gap-8 md:grid-cols-2 md:grid-rows-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

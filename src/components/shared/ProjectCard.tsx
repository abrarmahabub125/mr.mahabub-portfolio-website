import type { JSX } from "react";
import { Link } from "react-router";
import type { Project } from "../../data/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      className="hover:from-brand/15 hover:at-center transition duration-300 hover:bg-radial hover:to-transparent"
    >
      <Link
        target="_blank"
        className="flex flex-col gap-y-4"
        to={project?.liveSite}
      >
        <div className="max-h-72 w-full overflow-hidden rounded-2xl border border-gray-400">
          <img
            className="w-full object-cover"
            src={project?.image}
            alt="project-1"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {project?.techStacks.map((item, idx) => (
            <span
              key={idx}
              className="rounded-md bg-gray-400/70 px-2 py-1 text-xs font-light lg:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <p className="text-secondary line-clamp-4 text-xs leading-5 font-light lg:text-sm lg:leading-6 lg:font-normal">
            {project?.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

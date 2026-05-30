import { projects, servicesInfo } from "../../data/data";
import ProjectCard from "../shared/ProjectCard";
import ServiceInformaiton from "./ServiceInformaiton";

const ServiceDetails = () => {
  return (
    <div className="px-[calc((100vw-1150px)/2)]">
      {/* wrapper  */}
      <div>
        {/* container  */}
        <div className="px-4 lg:px-4">
          <div className="hover:from-brand/15 hover:at-top hover:to-background grid grid-cols-1 grid-rows-2 gap-x-12 gap-y-8 border-t border-gray-400 py-12 transition duration-300 hover:bg-radial md:grid-cols-2 md:grid-rows-1 md:gap-y-0">
            <div className="flex items-center justify-center">
              <ServiceInformaiton serviceDetails={servicesInfo[0]} />
            </div>
            <div>
              <ProjectCard project={projects[0]} />
            </div>
          </div>
          <div className="hover:from-brand/15 hover:at-top hover:to-background grid grid-cols-1 grid-rows-2 gap-x-12 gap-y-8 border-t border-gray-400 py-12 transition duration-300 hover:bg-radial md:grid-cols-2 md:grid-rows-1 md:gap-y-0">
            <div className="flex items-center justify-center">
              <ServiceInformaiton serviceDetails={servicesInfo[1]} />
            </div>
            <div>
              <ProjectCard project={projects[1]} />
            </div>
          </div>
          <div className="hover:from-brand/15 hover:at-top hover:to-background grid grid-cols-1 grid-rows-2 gap-x-12 gap-y-8 border-y border-gray-400 py-12 transition duration-300 hover:bg-radial md:grid-cols-2 md:grid-rows-1 md:gap-y-0">
            <div className="flex items-center justify-center">
              <ServiceInformaiton serviceDetails={servicesInfo[2]} />
            </div>
            <div>
              <ProjectCard project={projects[2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

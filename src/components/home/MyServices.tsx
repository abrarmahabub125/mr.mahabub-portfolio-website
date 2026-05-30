import { services } from "../../data/data";
import Button from "../shared/Button";
import ServiceCard from "../shared/ServiceCard";

const MyServices = () => {
  return (
    <div className="px-[calc((100vw-1150px)/2)]">
      <div className="mt-8 px-4 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row lg:flex-row lg:gap-y-0">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="from-brand to-primary bg-linear-120 bg-clip-text text-2xl font-medium text-transparent lg:text-3xl"
          >
            My services
          </h1>
          <Button label={"Learn more"} path="/services" />
        </div>

        {/* Projects grid  */}
        <div className="mt-14">
          <div className="grid w-full grid-cols-1 grid-rows-3 gap-8 lg:grid-cols-3 lg:grid-rows-1">
            {services.map((item, idx) => (
              <ServiceCard key={idx} service={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;

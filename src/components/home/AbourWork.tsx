import Button from "../shared/Button";

const AbourWork = () => {
  return (
    <div className="my-28 px-[calc((100vw-1150px)/2)]">
      <div className="flex flex-col items-center px-4 lg:items-start lg:px-0">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="mb-12 text-center text-lg font-semibold lg:text-left lg:text-2xl"
        >
          Forged skills in{" "}
          <span className="from-brand to-primary bg-linear-120 bg-clip-text font-bold text-transparent">
            web integration
          </span>{" "}
          and in digital design, I will be{" "}
          <span className="from-brand to-primary bg-linear-120 bg-clip-text font-bold text-transparent">
            delighted
          </span>{" "}
          to collaborate with you. My goal: to offer{" "}
          <span className="from-brand to-primary bg-linear-120 bg-clip-text font-bold text-transparent">
            you one unique creation
          </span>{" "}
          , tailor-made, which reflects your identity and fully meets your
          needs.
        </h1>
        <Button label="Start a project" path="/projects" />
      </div>
    </div>
  );
};

export default AbourWork;

import MyImage from "../../assets/images/my-photo.png";
import WordLoader from "../home/WorldLoader";
import Button from "../shared/Button";

const AboutMe = () => {
  return (
    <div className="my-12 px-4 xl:px-[calc((100vw-1150px)/2)]">
      <div className="flex flex-col items-center">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="mb-8 px-4 lg:px-24"
        >
          <div className="text-center text-lg font-medium md:text-xl lg:text-2xl">
            <WordLoader
              words={["react", "node.js", "express.js", "mongodb", "UI/UX"]}
            />
            Hello! i am Mahabub and I am{" "}
            <span className="to-brand from-primary via-primary bg-linear-60 from-0% via-35% to-100% bg-clip-text font-semibold text-transparent">
              MERN Stack Developer
            </span>{" "}
            and{" "}
            <span className="to-brand from-primary via-primary bg-linear-60 from-0% via-35% to-100% bg-clip-text font-semibold text-transparent">
              UI/UX designer
            </span>{" "}
            based at Nice. I love creating responsive and fully functional web
            application.
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
        >
          <div className="max-h-200 overflow-hidden rounded-3xl">
            <img
              className="h-full w-full object-cover object-center"
              src={MyImage}
              alt="image"
            />
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="text-primary mt-12 text-base leading-7 font-light"
        >
          <p className="text-primary text-sm leading-5 font-light lg:text-base lg:leading-6 lg:font-normal xl:leading-7">
            I’m a passionate MERN stack developer with 2 years of experience
            building modern, responsive, and scalable web applications. I
            specialize in creating dynamic user interfaces with React, Next.js,
            Tailwind CSS, and TypeScript, alongside developing secure and
            efficient backend systems using Node.js, Express, and MongoDB.
          </p>
          <p className="text-primary mt-4 text-xs leading-5 font-light md:text-sm lg:text-base lg:leading-7">
            I focus on writing clean, maintainable code and delivering smooth
            user experiences with optimized performance. From frontend design to
            backend architecture and database management, I enjoy turning ideas
            into functional digital products that solve real-world problems.
          </p>
        </div>
        <div className="mt-12">
          <Button label="Download my CV" path="/download-cv" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

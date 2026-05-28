import MyImage from "../../assets/images/my-photo.png";
import WordLoader from "../home/WorldLoader";
import Button from "../shared/Button";

const AboutMe = () => {
  return (
    <div className="my-12 lg:px-[calc((100vw-1150px)/2)]">
      <div className="flex flex-col items-center px-4 lg:px-0">
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
          <p className="text-primary text-xs leading-5 font-light md:text-sm lg:text-base lg:leading-7">
            I have from the age of 9 years, wanted to delve into this field, it
            all started when I wanted to become a Minecraft YouTuber. I needed a
            banner and a logo, so I started from there to self-train. I am also
            passionate about the world of photography and video games.
          </p>
          <p className="text-primary mt-4 text-xs leading-5 font-light md:text-sm lg:text-base lg:leading-7">
            Early 2025, I wanted to get started officially Freelance so that I
            can get closer to my goal : being able to be professionally free.
            Since then, I have had a few small clients with services such as
            logos and banners a logical continuation which I therefore granted
            myself. The name "Aeruk" has always been my nickname in games,
            "Aeruk" which shimmers becomes "Kurea", a reference to my origins,
            south Korea.
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

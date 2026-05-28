import { Link } from "react-router";

const ProjectCard = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      className="hover:from-brand/15 hover:at-center transition duration-300 hover:bg-radial hover:to-transparent"
    >
      <Link className="flex flex-col gap-y-4" to={"/projects"}>
        <div className="w-full overflow-hidden rounded-2xl border border-gray-400">
          <img
            className="w-full object-cover"
            src="https://aerukart.com/wp-content/uploads/2025/07/BANDY-IMAGE-PORTFOLIO.webp"
            alt="project-1"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-gray-400/70 px-2 py-1 text-xs font-light lg:text-sm">
            Direction Artistique
          </span>
          <span className="rounded-md bg-gray-400/70 px-2 py-1 text-xs font-light lg:text-sm">
            Direction
          </span>
          <span className="rounded-md bg-gray-400/70 px-2 py-1 text-xs font-light lg:text-sm">
            Direction Artistique
          </span>
          <span className="rounded-md bg-gray-400/70 px-2 py-1 text-xs font-light lg:text-sm">
            Artistique
          </span>
        </div>
        <div>
          <p className="text-secondary line-clamp-4 text-xs leading-5 lg:text-sm lg:leading-6">
            Academy Rivals est un événement E-sportif destiné aux étudiants dans
            lequel ceux-ci pourraient représenter leurs campus dans un tournois
            sur le jeu League Of Legends afin de remporter différents prix.
            Notre mission a donc été de créer une charte graphique entière ainsi
            que les assets Twitch. Vous retrouverez sur cette page, seulement la
            partie sur lequel j’ai été missionné, la partie DA. Miniature de
            TopCoach WordPress Projet réalisé lors de mon alternance chez Upyne
            Digital Solution. J’ai
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

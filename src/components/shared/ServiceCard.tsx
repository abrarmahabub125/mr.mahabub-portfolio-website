import { Link } from "react-router";
import Icon from "../../assets/icons/frontend-icon.png";
const ServiceCard = () => {
  return (
    <Link
      to={"/services"}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <div className="hover:from-brand/15 hover:at-center rounded-2xl border border-gray-400 bg-radial to-transparent p-8 transition-all duration-300 ease-in-out hover:-translate-y-3">
        <div className="flex flex-col gap-y-4">
          <div className="mb-2 lg:mb-4">
            <img
              className="size-12 object-cover object-center lg:size-14"
              src={Icon}
              alt="icon"
            />
          </div>
          <h1 className="from-brand to-primary bg-linear-140 bg-clip-text text-xl font-medium text-transparent lg:text-2xl">
            Site WordPress
          </h1>
          <p className="text-secondary line-clamp-5 text-sm/5.5 lg:text-sm/6">
            Donnez vie à votre marque avec un site WordPress sur mesure. Je vous
            accompagne dans la création d’un site performant, responsive et
            optimisé pour le référencement à moindre coût.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

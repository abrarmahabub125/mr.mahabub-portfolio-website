const ContactDetails = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <div>
        <h1 className="to-brand from-primary bg-linear-to-tr bg-clip-text text-3xl font-semibold text-transparent">
          A need?
        </h1>
        <p className="text-primary mt-4 text-sm leading-6 font-light">
          Si vous avez un projet ou des besoins en Web Design, Direction
          Artistique ou encore en Motion Design, n’hésitez pas à me contacter !
        </p>
        <p className="text-primary mt-4 text-sm leading-6 font-light">
          Nous échangerons par mail en premier lieu et par la suite sur WhatsApp
          afin de faciliter l’échange. Je vous suis disponible à tout moment.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-secondary mt-4 text-sm leading-6 font-extralight">
          Traitement des données personelles
        </p>
        <p className="text-secondary mt-4 text-sm leading-6 font-extralight">
          Conformément aux dispositions des articles 38 et suivants de la loi
          78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux
          libertés, tout utilisateur dispose d’un droit d’accès, de
          rectification, de suppression et d’opposition aux données personnelles
          le concernant. Vous pouvez exercer ce droit par simple demande en nous
          contactant en justifiant de votre identité.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;

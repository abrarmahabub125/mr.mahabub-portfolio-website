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
          If you have a project idea or need a modern, scalable, and
          high-performing web application, feel free to get in touch with me.
        </p>
        <p className="text-primary mt-4 text-sm leading-6 font-light">
          We can initially communicate through email and later continue on
          WhatsApp for smoother discussion and project updates. I’m available to
          discuss your ideas, requirements, and development solutions at any
          time.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-secondary mt-4 text-sm leading-6 font-extralight">
          Processing of personal data
        </p>
        <p className="text-secondary mt-4 text-sm leading-6 font-extralight">
          In accordance with applicable data protection regulations, any
          personal information shared through this website or communication
          channels will remain secure and confidential. You may request access,
          modification, or deletion of your personal data at any time by
          contacting me directly.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;

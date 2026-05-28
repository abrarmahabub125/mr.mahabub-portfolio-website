import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="my-24 px-[calc((100vw-1150px)/2)]">
      <div className="grid w-full gap-y-8 px-4 md:grid-cols-2 md:grid-rows-1 md:gap-x-12">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;

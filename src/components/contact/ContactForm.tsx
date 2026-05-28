const ContactForm = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <form>
        <div className="flex w-full flex-col space-y-6">
          <input
            className="text-primary rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light outline-none"
            type="text"
            placeholder="John Doe"
          />
          <input
            className="text-primary rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light outline-none"
            type="email"
            placeholder="you@example.com"
          />
          <input
            className="text-primary rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light outline-none"
            type="text"
            placeholder="Project discussion"
          />
          <textarea
            className="text-primary rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light outline-none"
            rows={6}
            placeholder="Write your message..."
          />
        </div>

        <button
          className="bg-brand-secondary hover:bg-brand hover:text-primary-black mt-8 inline-block w-fit rounded-full px-5 py-2.5 text-xs text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-105 md:text-sm lg:px-6 lg:py-3"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import { type SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type ContactFormInputs = {
  name: string;
  email: string;
  discussion: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = () =>
    toast.success("Message sent successfully.");

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-5">
          {/* Name */}
          <div>
            <input
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 24,
                  message: "Name cannot exceed 24 characters",
                },
              })}
              className="text-primary w-full rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light transition-colors outline-none"
              type="text"
              placeholder="John Doe"
            />

            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="text-primary w-full rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light transition-colors outline-none"
              type="email"
              placeholder="you@example.com"
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Discussion */}
          <div>
            <input
              {...register("discussion", {
                maxLength: {
                  value: 200,
                  message: "Discussion cannot exceed 200 characters",
                },
              })}
              className="text-primary w-full rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light transition-colors outline-none"
              type="text"
              placeholder="Project discussion"
            />

            {errors.discussion && (
              <p className="mt-1 text-xs text-red-500">
                {errors.discussion.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", {
                required: "Message is required",
                maxLength: {
                  value: 300,
                  message: "Message cannot exceed 300 characters",
                },
              })}
              className="text-primary w-full rounded-md border border-gray-400 px-4 py-2.5 text-sm font-light transition-colors outline-none"
              rows={6}
              placeholder="Write your message..."
            />

            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
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

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ) 
        .then(
          () => {
            setLoading(false);
            setMessage("Message sent successfully 😊😊");
            form.current?.reset(); // Clear the form fields

            // Clear the message after 10 seconds
            setTimeout(() => setMessage(""), 10000);
          },
          (error) => {
            setLoading(false);
            setMessage(`Failed to Deliver the Message ${error.text}`);
          }
        );
    }
  };

  return (
    <section id="Contact" className="py-5 bg-black">
      <div className="max-w-lg max-sm:w-4/5 mx-auto sm:px-6 lg:px-8 ">
        <div className="max-sm:mt-8 mt-12 flex flex-col justify-center">
          <div className="text-center mb-6 max-sm:mb-2">
            <h1 className="text-indigo-500 title-font mb-0 text-3xl font-extrabold leading-10 tracking-tight max-lg:text-2xl max-md:text-xl max-sm:text-lg max-sm:leading-none">
              Contact Me
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="max-sm:w-16 w-24 h-1 rounded-full bg-indigo-300 inline-flex "></div>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black p-4 sm:py-4 rounded-2xl shadow-lg mt-8 max-sm:mt-4 border-4 border-violet-700"
        >
          <div className="mb-4 sm:mb-3">
            <label
              htmlFor="user_name"
              className="block text-gray-400 text-sm font-medium mb-1 sm:mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-3 py-2 max-sm:py-1 rounded-lg bg-black border-indigo-800 border-[2px] text-white focus:outline-none focus:ring-0 focus:ring-red-600"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="user_email"
              className="block text-gray-400 text-sm font-medium mb-1 sm:mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-3 py-2 max-sm:py-1 rounded-lg bg-black border-indigo-800 border-[2px] text-white focus:outline-none focus:ring-0 focus:ring-red-600"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-400 text-sm font-medium mb-1 sm:mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full px-3 py-2 max-sm:py-1 rounded-lg bg-black border-indigo-800 border-[2px] text-white focus:outline-none focus:ring-0 focus:ring-red-600"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="message"
              className="block text-gray-400 text-sm font-medium mb-1 sm:mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="w-full px-3 py-2 max-sm:py-1 rounded-lg bg-black border-indigo-800 border-[2px] text-white focus:outline-none focus:ring-0 focus:ring-red-600"
              rows={3}
            />
          </div>
          {message && (
            <p
              className={`mb-4 text-center ${
                message.startsWith("Message")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full px-3 py-2 max-sm:py-1 rounded-lg bg-blue-700 border-indigo-800 border-[2px] text-white focus:outline-none focus:ring-0 focus:ring-red-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

import { useState } from "react";
import { ResumeButton } from "../ResumeButton.jsx";
import emailjs from "emailjs-com";
import { SubmitButton } from "../Submitbutton.jsx";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ServiceId = "service_1co6r4v";
  const TemplateId = "template_b7djart";
  const PublicKey = "VNkmaynOxN-LJbSgO";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(ServiceId, TemplateId, e.target, PublicKey)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong! Please try again."));
  };

  return (
    <div className="flex justify-center items-center mt-12 px-6 py-10 xl:px-12 xl:py-14 xl:pt-36">
      <div className="w-full max-w-lg bg-white/5 p-6 rounded-lg shadow-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center pb-6">
          <span className="text-[oklch(0.985 0 0)]">Let's</span>
          <span className="text-[#00df9a]"> Connect</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmitForm}>
          <div className="relative">
            <input
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
              placeholder="Name.."
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue"
            />
          </div>

          <div className="relative">
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
              placeholder="example@gmail.com"
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue"
            />
          </div>

          <div className="relative">
            <textarea
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              value={formData.message}
              placeholder="Your message"
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue"
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-4">
            <SubmitButton/>
            <ResumeButton />
          </div>
        </form>
      </div>
    </div>
  );
};

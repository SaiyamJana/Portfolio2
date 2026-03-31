import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
    alert("Please fill all fields");
    return;
  }

  emailjs
    .send(
      "service_ms6ayo7",
      "template_6j57k3e",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "2F2d3frh_fBc-X8Mx"
    )
    .then(
      () => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      },
      (error) => {
        console.error(error);
        alert("Failed to send message");
      }
    );
  };

  const contactInfo = [
    ["📧", "EMAIL", "your@email.com"],
    ["💬", "DISCORD", "your#id"],
    ["🔗", "LINKEDIN", "your-link"],
    ["🐙", "GITHUB", "@yourhandle"],
  ];

  return (
    <section id="contact" className="bg-[#070707] py-32 px-6 relative">
      
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-orange-500 text-xs tracking-[0.3em]">
            {"// 04. CONTACT"}
          </span>

          <h2 className="font-[Bebas_Neue] text-4xl md:text-6xl text-white mt-2">
            LET'S <span className="text-orange-500">BUILD</span> SOMETHING
          </h2>

          <p className="text-gray-500 font-serif max-w-md mx-auto mt-4">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">

          {/* Contact Info */}
          <div>
            {contactInfo.map(([icon, label, val]) => (
              <div key={label} className="flex gap-4 mb-8 items-start">
                <div className="w-11 h-11 flex items-center justify-center border border-orange-500/30 bg-orange-500/10">
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] text-gray-500 tracking-[0.2em]">
                    {label}
                  </p>
                  <p className="text-gray-300 text-sm">{val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0d0d0d] border border-[#1a1a1a] p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 to-transparent" />

            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-[Bebas_Neue] text-2xl text-orange-500">
                  MESSAGE SENT!
                </h3>
                <p className="text-gray-500">I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                {/* Name */}
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full mb-4 bg-[#111] border border-[#1f1f1f] text-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full mb-4 bg-[#111] border border-[#1f1f1f] text-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full mb-4 bg-[#111] border border-[#1f1f1f] text-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-black py-4 font-[Bebas_Neue] text-lg tracking-[0.2em] hover:bg-orange-600 transition"
                >
                  SEND MESSAGE →
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
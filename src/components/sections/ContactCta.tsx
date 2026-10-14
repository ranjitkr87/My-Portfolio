import React, { useState } from "react";
import { siteConfig } from "../../content/site.ts";

export const ContactCta: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Webflow & CMS Development",
    details: "",
    companyBotTrap: "", // Honeypot
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // If honeypot is filled, silent exit
    if (formData.companyBotTrap) return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.details.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please provide a valid email address.");
      return;
    }

    setSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(
    `Project Enquiry: ${formData.projectType} — ${formData.name}`,
  );
  const mailtoBody = encodeURIComponent(
    `Hi Ranjit Rajan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Scope & Timeline:\n${formData.details}\n`,
  );
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Ranjit Rajan, my name is ${formData.name} (${formData.email}). I want to discuss a ${formData.projectType} project: ${formData.details}`,
  );
  const whatsappUrl = `https://wa.me/919895311062?text=${whatsappMessage}`;

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-24 sm:pb-32 reveal-section"
      data-mode="void"
    >
      <div className="bg-[#C6FF3D] rounded-[24px] p-6 sm:p-10 md:p-16 text-[#09090B]">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          {/* <span className="font-mono text-xs uppercase tracking-[0.08em] bg-[#09090B] text-[#F4EFE6] px-4 py-1.5 rounded-full inline-block font-bold mb-6">
            [ {siteConfig.availability.cycleNotice} ]
          </span> */}

          <h2
            id="cta-heading"
            className="text-4xl sm:text-6xl md:text-8xl leading-[0.95] font-extrabold uppercase tracking-tight text-[#09090B] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have a project in mind?
          </h2>

          <p className="text-base sm:text-lg text-[#09090B] max-w-xl mx-auto mb-6 font-medium leading-relaxed">
            Let’s discuss your requirements, CMS architecture, or full-stack
            Webflow build.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-sm sm:text-base font-bold uppercase underline tracking-[0.08em] hover:text-[#FF3D9A] transition-colors duration-150 inline-block py-2"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Compact Enquiry Form */}
        <div className="max-w-2xl mx-auto bg-[#09090B] p-6 sm:p-8 md:p-10 rounded-[12px] border border-[#09090B]">
          {submitted ? (
            <div
              className="py-8 text-center space-y-6"
              role="alert"
              aria-live="polite"
            >
              <div className="w-14 h-14 rounded-full bg-[#C6FF3D] text-[#09090B] flex items-center justify-center mx-auto font-bold text-2xl">
                ✓
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F4EFE6]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Message Dispatched
              </h3>
              <p className="font-mono text-xs uppercase text-[#A7A29A] tracking-[0.08em] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your project enquiry has been
                registered. You can also send the summary directly via your
                email client or WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto rounded-full bg-[#131318] border border-[#26262E] hover:border-[#C6FF3D] px-6 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#F4EFE6] transition-colors"
                >
                  [ Open in Email Client ]
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-full bg-[#C6FF3D] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#09090B] hover:bg-[#FF3D9A] hover:text-[#F4EFE6] transition-colors"
                >
                  [ Send on WhatsApp ]
                </a>
              </div>

              <div className="pt-4 border-t border-[#26262E]">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      projectType: "Webflow & CMS Development",
                      details: "",
                      companyBotTrap: "",
                    });
                  }}
                  className="font-mono text-xs uppercase text-[#A7A29A] hover:text-[#C6FF3D] underline tracking-[0.08em]"
                >
                  [ Submit Another Enquiry ]
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Error feedback */}
              {error && (
                <div
                  className="p-3 bg-[#FF3D9A]/10 border border-[#FF3D9A] rounded-[8px] text-[#FF3D9A] font-mono text-xs uppercase tracking-[0.08em]"
                  role="alert"
                >
                  {error}
                </div>
              )}

              {/* Honeypot field for bot protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="companyBotTrap">
                  Company Security Question
                </label>
                <input
                  id="companyBotTrap"
                  name="companyBotTrap"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.companyBotTrap}
                  onChange={(e) =>
                    setFormData({ ...formData, companyBotTrap: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A] mb-2"
                  >
                    YOUR NAME *
                  </label>
                  <input
                    id="client-name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Wayne"
                    className="w-full bg-[#131318] border border-[#26262E] focus:border-[#C6FF3D] text-[#F4EFE6] rounded-[8px] px-4 py-3 text-base placeholder-[#5E5A52] outline-none transition-colors duration-150"
                  />
                </div>
                <div>
                  <label
                    htmlFor="client-email"
                    className="block font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A] mb-2"
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="client-email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full bg-[#131318] border border-[#26262E] focus:border-[#C6FF3D] text-[#F4EFE6] rounded-[8px] px-4 py-3 text-base placeholder-[#5E5A52] outline-none transition-colors duration-150"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project-type"
                  className="block font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A] mb-2"
                >
                  PROJECT TYPE
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full bg-[#131318] border border-[#26262E] focus:border-[#C6FF3D] text-[#F4EFE6] rounded-[8px] px-4 py-3 text-base outline-none transition-colors duration-150 cursor-pointer"
                >
                  <option value="Webflow & CMS Development">
                    Webflow &amp; CMS Development
                  </option>
                  <option value="Sanity CMS & Dynamic Content">
                    Sanity CMS &amp; Dynamic Content
                  </option>
                  <option value="React / TypeScript Frontend">
                    React / TypeScript Frontend
                  </option>
                  <option value="Full Website Rebuild & SEO">
                    Full Website Rebuild &amp; SEO
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="project-details"
                  className="block font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A] mb-2"
                >
                  PROJECT DETAILS &amp; TIMELINE *
                </label>
                <textarea
                  id="project-details"
                  name="details"
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Scope, launch goals, reference sites..."
                  className="w-full bg-[#131318] border border-[#26262E] focus:border-[#C6FF3D] text-[#F4EFE6] rounded-[8px] px-4 py-3 text-base placeholder-[#5E5A52] outline-none transition-colors duration-150 resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#C6FF3D] text-[#09090B] py-4 font-mono text-xs uppercase tracking-[0.08em] font-bold transition-colors duration-150 hover:bg-[#FF3D9A] hover:text-[#F4EFE6] min-h-[48px] cursor-pointer"
              >
                Initiate Project
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

import React from "react";

const skills = [
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3f.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
];

const tools = [
  "VS Code",
  "Git & GitHub",
  "Figma",
  "Postman",
  "Photoshop",
  "Notion",
];

const certificates = [
  { name: "React Developer Certificate", issuer: "Dicoding", year: 2024 },
  { name: "UI/UX Design", issuer: "Coursera", year: 2023 },
];

const Skills = () => (
  <div className="min-h-screen flex flex-col bg-dark text-light">
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
      <div className="relative z-10 w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Skills Grid */}
        <section className="md:col-span-1 bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-highlight mb-2">
            Keahlian Utama
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-main/20 border border-highlight/10 shadow-sm"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-secondary text-lg">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* Tools & Sertifikat */}
        <div className="md:col-span-1 flex flex-col gap-8">
          {/* Tools & Software */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
            <h2 className="text-xl font-bold text-highlight mb-2">
              Tools & Software
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-main/30 text-highlight border border-highlight/30 text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
          {/* Sertifikat */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
            <h2 className="text-xl font-bold text-highlight mb-2">
              Sertifikat
            </h2>
            <ul className="space-y-2">
              {certificates.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col md:flex-row md:items-center md:justify-between bg-main/20 rounded-lg px-4 py-2"
                >
                  <span className="font-semibold text-secondary">
                    {cert.name}
                  </span>
                  <span className="text-sm text-highlight">
                    {cert.issuer} &bull; {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      {/* Liquid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </main>
  </div>
);

export default Skills;

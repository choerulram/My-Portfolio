import React, { useState } from "react";

const projects = [
  {
    name: "Personal Portfolio",
    desc: "Website portofolio pribadi dengan React dan Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    demo: "https://your-portfolio-demo.com",
    github: "https://github.com/yourusername/portfolio",
    category: "Web App",
  },
  {
    name: "Dashboard Admin",
    desc: "Aplikasi dashboard responsif untuk monitoring data.",
    tech: ["React", "Chart.js", "Node.js"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    demo: "https://your-dashboard-demo.com",
    github: "https://github.com/yourusername/dashboard",
    category: "Web App",
  },
  {
    name: "Landing Page Produk",
    desc: "Landing page modern untuk promosi produk digital.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    demo: "https://your-landing-demo.com",
    github: "https://github.com/yourusername/landing-page",
    category: "Landing Page",
  },
  {
    name: "UI Kit Komponen",
    desc: "Kumpulan reusable UI komponen untuk proyek React.",
    tech: ["React", "Storybook", "SCSS"],
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    demo: "https://your-uikit-demo.com",
    github: "https://github.com/yourusername/uikit",
    category: "Library",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-light">
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
        <div className="max-w-6xl w-full mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-5 py-2 rounded-full font-semibold border transition backdrop-blur shadow-sm text-sm
                  ${
                    selected === cat
                      ? "bg-highlight text-main border-highlight"
                      : "bg-white/10 text-highlight border-highlight/30 hover:bg-highlight/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.name}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow-lg flex flex-col overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-highlight mb-1">
                    {project.name}
                  </h3>
                  <p className="text-base opacity-90 mb-3 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-main/30 text-highlight border border-highlight/30 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-highlight text-main font-semibold shadow hover:bg-secondary transition text-sm"
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-highlight text-highlight font-semibold hover:bg-highlight hover:text-main transition text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
};

export default Projects;

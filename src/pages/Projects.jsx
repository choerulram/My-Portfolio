import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "NuTrack - Capstone Project",
    desc: "Proyek tim (6 anggota) untuk Capstone Project Coding Camp: Aplikasi nutrisi dan tracking makanan dengan teknologi OCR dan AI untuk scan & analisis kandungan gizi.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Webpack",
      "Python FastAPI",
      "RESTful API",
      "TensorFlow",
      "Keras OCR",
    ],
    img: "public/assets/images/nu-track.png",
    demo: "https://nu-track.netlify.app/",
    github: "https://github.com/Capstone-NuTrack",
    category: "Full Stack App",
  },
  {
    name: "Aplikasi Keuangan",
    desc: "Sistem manajemen keuangan berbasis web dengan fitur tracking pengeluaran dan pemasukan, laporan keuangan, dan visualisasi data.",
    tech: ["CodeIgniter", "Tailwind CSS", "MySQL"],
    img: "public/assets/images/aplikasi-keuangan.png",
    demo: "https://aplikasikeuangan.free.nf/",
    github: "https://github.com/choerulram/Aplikasi-Keuangan",
    category: "Web App",
  },
  {
    name: "RESTful API Sistem Pengelolaan Buku",
    desc: 'Proyek ini adalah submission untuk kelas "Belajar Back-End Pemula dengan JavaScript" pada program Coding Camp 2025 powered by DBS Foundation. Implementasi ini mencakup pembuatan RESTful API untuk sistem pengelolaan buku.',
    tech: ["Node.js", "Hapi", "REST API", "JavaScript"],
    img: "public/assets/images/back-end.png",
    demo: "",
    github: "https://github.com/choerulram/Back-End-Pemula_CodingCamp",
    category: "Backend",
  },
  {
    name: "Story App - Web Intermediate Project",
    desc: "Aplikasi berbagi cerita dengan fitur unggah gambar, geolokasi, dan autentikasi pengguna. Submission akhir kelas Web Development Intermediate.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "public/assets/images/intermediate-akhir.png",
    demo: "https://story-app-choerul.netlify.app/",
    github:
      "https://github.com/choerulram/Web-Intermediate-Proyek-Akhir_CodingCamp",
    category: "Web App",
  },
  {
    name: "Notes App - Fundamental Front-End Web Development",
    desc: "Aplikasi catatan sederhana sebagai submission akhir kelas Fundamental Front-End Web Development di Coding Camp.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "public/assets/images/frontend-akhir.png",
    demo: "",
    github:
      "https://github.com/choerulram/Fundamental-Front-End-Proyek-Akhir_CodingCamp",
    category: "Web App",
  },
  {
    name: "E-Presensi Project",
    desc: "Sistem presensi elektronik berbasis web: manajemen kehadiran, laporan presensi real-time, dan dashboard analytics.",
    tech: ["Laravel", "MySQL", "Flowbite"],
    img: "public/assets/images/e-presensi.jpg",
    demo: "",
    github: "https://github.com/choerulram/E-presensi/tree/main",
    category: "Web App",
  },
  {
    name: "SIPENKA - Sistem Pendataan Karyawan",
    desc: "Sistem pendataan karyawan sederhana: CRUD data karyawan, pencarian, dan laporan dasar.",
    tech: ["PHP", "CSS"],
    img: "public/assets/images/sipenka.jpg",
    demo: "",
    github: "https://github.com/choerulram/JWD-Project",
    category: "Web App",
  },
  {
    name: "Sistem Manajemen Komik",
    desc: "Sistem manajemen koleksi komik berbasis web: katalog komik, kategori komik, dan pencarian.",
    tech: ["CodeIgniter", "MySQL", "Bootstrap"],
    img: "public/assets/images/code-igniter-komik.jpg",
    demo: "",
    github: "https://github.com/choerulram/Code-Igniter",
    category: "Web App",
  },
  {
    name: "Line Follower Competition Robotic PNC",
    desc: "Website pendaftaran untuk kompetisi Line Follower PNC.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "public/assets/images/line-follower.png",
    demo: "https://logicrobotic.netlify.app/",
    github: "https://github.com/Protic-PNC/Robotic-regis-project",
    category: "Web App",
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
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-16 px-2 md:px-4">
        <div className="max-w-6xl w-full mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full font-semibold border transition backdrop-blur shadow-sm text-xs md:text-sm
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
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.13, ease: "easeOut" },
              },
            }}
          >
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow-lg flex flex-col overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="p-3 md:p-6 flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold text-highlight mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs md:text-base opacity-90 mb-2 md:mb-3 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 md:px-2 py-0.5 md:py-1 rounded bg-main/30 text-highlight border border-highlight/30 text-[10px] md:text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 md:gap-3 mt-auto">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-highlight text-main font-semibold shadow hover:bg-secondary transition text-xs md:text-sm"
                      >
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-highlight text-highlight font-semibold hover:bg-highlight hover:text-main transition text-xs md:text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Liquid Glass Background Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-44 h-44 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Projects;

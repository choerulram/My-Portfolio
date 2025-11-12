import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    school: "Politeknik Negeri Cilacap",
    major: "D3 Teknik Informatika",
    year: "2022 - 2025",
    gpa: "3.69",
  },
  {
    school: "SMK Ma'arif 1 Kroya",
    major: "Teknik Kendaraan Ringan Otomotif",
    year: "2019 - 2022",
  },
];

const experience = [
  {
    company: "PT. Metafora Indonesia Teknologi",
    position: "Intern - Junior Web Developer",
    year: "Agustus 2024 - Desember 2024",
    desc: "Magang sebagai Junior Web Developer: mengembangkan fitur front-end, back-end, dan database menggunakan CodeIgniter serta membantu developer senior dalam proses pengembangan.",
  },
  {
    company: "Coding Camp 2025 (DBS Foundation)",
    position: "Learning Path: Front-end & Back-end Developer",
    year: "Februari - Juli 2025",
    desc: "Mengikuti learning path Front-end & Back-end Developer — membangun proyek akhir full-stack, mempelajari best practice deployment, dan menerima mentoring dari profesional.",
  },
];

const organizations = [
  {
    name: "Protic (Programming Technology Informatics Club)",
    role: "Divisi Web - Anggota",
    year: "2023 - 2024",
    desc: `Bertanggung jawab sebagai asisten mentor dalam study jams Protic untuk kelas Web Basic dan
    mengembangkan website untuk kebutuhan Protic, termasuk fitur dan desain untuk meningkatkan pengalaman pengguna.`,
  },
  {
    name: "Teaching Factory JKB - Politeknik Negeri Cilacap",
    role: "Pengembang Web",
    year: "2023 - 2024",
    desc: `Bertanggung jawab dalam pengembangan salah satu proyek JKB ERP menggunakan Laravel; berpartisipasi dalam perencanaan tim, menganalisis kebutuhan pengguna, dan menerapkan perubahan/peningkatan berdasarkan umpan balik.`,
  },
];

const Resume = () => (
  <div className="min-h-screen flex flex-col bg-dark text-light">
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-16 px-2 md:px-4">
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.7 },
          },
        }}
      >
        {/* Download CV */}
        <motion.div className="flex justify-end" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <a
            href="/cv.pdf"
            download
            className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-highlight text-main font-bold shadow hover:bg-secondary transition text-xs md:text-sm border-2 border-highlight"
          >
            Download CV (PDF)
          </a>
        </motion.div>
        {/* Pendidikan */}
        <motion.section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-3 md:p-6" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-lg md:text-xl font-bold text-highlight mb-3 md:mb-4">
            Pendidikan
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {education.map((edu) => (
              <motion.li
                key={edu.school}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div>
                  <span className="font-semibold text-secondary text-sm md:text-base">
                    {edu.school}
                  </span>
                  <span className="block text-xs md:text-sm text-highlight">
                    {edu.major}
                  </span>
                  {edu.gpa && (
                    <span className="block text-xs text-white opacity-90">
                      IPK: {edu.gpa}
                    </span>
                  )}
                </div>
                <span className="text-xs md:text-sm text-highlight">
                  {edu.year}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        {/* Pengalaman Kerja */}
        <motion.section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-3 md:p-6" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-lg md:text-xl font-bold text-highlight mb-3 md:mb-4">
            Pengalaman & Magang
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {experience.map((exp) => (
              <motion.li key={exp.company} className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <span className="font-semibold text-secondary text-sm md:text-base">
                    {exp.company}
                  </span>
                  <span className="text-xs md:text-sm text-highlight">
                    {exp.year}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-highlight">
                  {exp.position}
                </span>
                <span className="text-xs md:text-sm opacity-80">
                  {exp.desc}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        {/* Organisasi/Volunteer */}
        <motion.section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-3 md:p-6" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-lg md:text-xl font-bold text-highlight mb-3 md:mb-4">
            Organisasi & Kegiatan
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {organizations.map((org) => (
              <motion.li
                key={org.name}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex-1">
                  <span className="font-semibold text-secondary text-sm md:text-base">
                    {org.name}
                  </span>
                  <span className="block text-xs md:text-sm text-highlight">
                    {org.role}
                  </span>
                  {org.desc && (
                    <p className="text-xs md:text-sm opacity-80 mt-1 whitespace-pre-line">
                      {org.desc}
                    </p>
                  )}
                </div>
                <span className="text-xs md:text-sm text-highlight">
                  {org.year}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
  </motion.div>
      {/* Liquid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-44 h-44 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </main>
  </div>
);

export default Resume;

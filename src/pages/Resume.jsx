import React from "react";

const education = [
  {
    school: "Universitas Teknologi Indonesia",
    major: "Teknik Informatika",
    year: "2018 - 2022",
  },
  {
    school: "SMA Negeri 1 Bandung",
    major: "IPA",
    year: "2015 - 2018",
  },
];

const experience = [
  {
    company: "PT Digital Kreatif",
    position: "Frontend Developer",
    year: "2023 - Sekarang",
    desc: "Membangun dan mengelola aplikasi web modern dengan React dan Tailwind CSS, berkolaborasi dengan tim UI/UX dan backend.",
  },
  {
    company: "Freelance",
    position: "Web Developer",
    year: "2021 - 2023",
    desc: "Mengerjakan berbagai proyek website landing page, company profile, dan dashboard untuk klien lokal dan internasional.",
  },
];

const organizations = [
  {
    name: "Himpunan Mahasiswa Informatika",
    role: "Staff IT & Media",
    year: "2019 - 2021",
  },
  {
    name: "Komunitas Coding Bandung",
    role: "Volunteer Mentor",
    year: "2022 - Sekarang",
  },
];

const Resume = () => (
  <div className="min-h-screen flex flex-col bg-dark text-light">
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-10">
        {/* Download CV */}
        <div className="flex justify-end">
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-full bg-highlight text-main font-bold shadow hover:bg-secondary transition text-sm border-2 border-highlight"
          >
            Download CV (PDF)
          </a>
        </div>
        {/* Pendidikan */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
          <h2 className="text-xl font-bold text-highlight mb-4">Pendidikan</h2>
          <ul className="space-y-4">
            {education.map((edu) => (
              <li
                key={edu.school}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <span className="font-semibold text-secondary">
                    {edu.school}
                  </span>
                  <span className="block text-sm text-highlight">
                    {edu.major}
                  </span>
                </div>
                <span className="text-sm text-highlight">{edu.year}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Pengalaman Kerja */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
          <h2 className="text-xl font-bold text-highlight mb-4">
            Pengalaman Kerja
          </h2>
          <ul className="space-y-4">
            {experience.map((exp) => (
              <li key={exp.company} className="flex flex-col gap-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <span className="font-semibold text-secondary">
                    {exp.company}
                  </span>
                  <span className="text-sm text-highlight">{exp.year}</span>
                </div>
                <span className="text-sm text-highlight">{exp.position}</span>
                <span className="text-sm opacity-80">{exp.desc}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Organisasi/Volunteer */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
          <h2 className="text-xl font-bold text-highlight mb-4">
            Organisasi & Volunteer
          </h2>
          <ul className="space-y-4">
            {organizations.map((org) => (
              <li
                key={org.name}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <span className="font-semibold text-secondary">
                    {org.name}
                  </span>
                  <span className="block text-sm text-highlight">
                    {org.role}
                  </span>
                </div>
                <span className="text-sm text-highlight">{org.year}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* Liquid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </main>
  </div>
);

export default Resume;

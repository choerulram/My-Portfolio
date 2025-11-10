import React from "react";

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
                  {edu.gpa && (
                    <span className="block text-xs text-white opacity-90">
                      IPK: {edu.gpa}
                    </span>
                  )}
                </div>
                <span className="text-sm text-highlight">{edu.year}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Pengalaman Kerja */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
          <h2 className="text-xl font-bold text-highlight mb-4">
            Pengalaman & Magang
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
            Organisasi & Kegiatan
          </h2>
          <ul className="space-y-4">
            {organizations.map((org) => (
              <li
                key={org.name}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <span className="font-semibold text-secondary">
                    {org.name}
                  </span>
                  <span className="block text-sm text-highlight">
                    {org.role}
                  </span>
                  {org.desc && (
                    <p className="text-sm opacity-80 mt-1 whitespace-pre-line">
                      {org.desc}
                    </p>
                  )}
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

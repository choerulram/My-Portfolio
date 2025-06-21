import React from "react";

const Home = () => (
  <div className="min-h-screen flex flex-col bg-dark text-light">
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Liquid Glass Card */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-8 py-12 rounded-3xl shadow-2xl border border-highlight/30 bg-white/10 backdrop-blur-lg flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-highlight mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-highlight drop-shadow-lg text-center">
          Nama Anda
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-secondary text-center">
          Frontend Developer & UI/UX Enthusiast
        </h2>
        <p className="text-base md:text-lg mb-8 text-center max-w-md opacity-90">
          Saya adalah seorang developer yang berfokus pada pembuatan antarmuka
          modern, responsif, dan user-friendly. Passion saya di bidang teknologi
          dan desain membantu saya menciptakan solusi digital yang impactful dan
          estetik.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <a
            href="/projects"
            className="bg-highlight text-main font-bold px-8 py-3 rounded-full shadow hover:bg-secondary transition text-center"
          >
            Lihat Proyek
          </a>
          <a
            href="/resume"
            className="border-2 border-highlight text-highlight px-8 py-3 rounded-full font-bold shadow hover:bg-highlight hover:text-main transition text-center"
          >
            Resume/CV
          </a>
          <a
            href="/contact"
            className="bg-main text-highlight font-bold px-8 py-3 rounded-full shadow hover:bg-highlight hover:text-main border-2 border-highlight transition text-center"
          >
            Kontak Saya
          </a>
        </div>
        {/* Link About dan Skills sebagai badge modern */}
        <div className="flex flex-row gap-3 w-full justify-center mt-6">
          <a
            href="/about"
            className="flex items-center gap-1 px-4 py-1 rounded-full bg-white/20 border border-highlight/30 text-secondary hover:bg-highlight/20 hover:text-highlight shadow-sm backdrop-blur transition text-sm font-semibold"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Tentang Saya
          </a>
          <a
            href="/skills"
            className="flex items-center gap-1 px-4 py-1 rounded-full bg-white/20 border border-highlight/30 text-secondary hover:bg-highlight/20 hover:text-highlight shadow-sm backdrop-blur transition text-sm font-semibold"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17a2.5 2.5 0 002 0m-2-4a2.5 2.5 0 012 0m-2-4a2.5 2.5 0 012 0M12 19v2m0-18v2m7.071 2.929l-1.414 1.414M4.929 19.071l1.414-1.414M19 12h2M3 12H5m2.929-7.071l1.414 1.414M19.071 19.071l-1.414-1.414"
              />
            </svg>
            Keahlian
          </a>
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

export default Home;

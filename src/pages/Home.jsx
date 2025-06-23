import React from "react";
import Lanyard from "../components/Lanyard";
import AnimatedContent from "../components/Animations/AnimatedContent/AnimatedContent";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://linkedin.com/in/username",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
      </svg>
    ),
    label: "LinkedIn",
  },
  {
    href: "https://github.com/username",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
  },
  // Tambahkan social lain jika perlu
];

const Home = () => (
  <div className="min-h-screen flex flex-col bg-light text-light">
    <main className="flex-1 flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient & Blurred Spot */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-highlight/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900/80 to-black opacity-90" />
      </div>
      {/* Split Layout Desktop Improved with 3D Lanyard Badge */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-center justify-center gap-20 px-12 py-24">
        {/* Kiri: 3D Lanyard Badge & Social */}
        <div
          className="flex flex-col items-center w-2/5 max-w-md gap-12 relative"
          style={{ paddingTop: 670 }}
        >
          {/* Badge 3D: lanyard benar-benar mentok ke atas */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 480,
              zIndex: 20,
              display: "flex",
              justifyContent: "center",
              pointerEvents: "auto",
            }}
          >
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          {/* Social Links */}
          <div className="flex flex-col gap-5 mt-4">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-highlight/30 text-secondary hover:bg-highlight/20 hover:text-highlight shadow-md backdrop-blur transition text-lg font-semibold"
                style={{ pointerEvents: "auto" }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>
        {/* Kanan: Bio & CTA */}
        <AnimatedContent>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-3/5 max-w-2xl"
          >
            <div className="w-full px-14 py-16 rounded-3xl shadow-2xl border border-highlight/30 bg-white/10 backdrop-blur-lg flex flex-col items-center">
              <h1 className="text-6xl lg:text-7xl font-extrabold mb-4 text-highlight drop-shadow-lg text-center leading-tight">
                Nama Anda
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-secondary text-center">
                Frontend Developer & UI/UX Enthusiast
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-center max-w-xl opacity-90 leading-relaxed">
                Saya adalah seorang developer yang berfokus pada pembuatan
                antarmuka modern, responsif, dan user-friendly. Passion saya di
                bidang teknologi dan desain membantu saya menciptakan solusi
                digital yang impactful dan estetik.
              </p>
              <div className="flex flex-row gap-8 w-full justify-center">
                <a
                  href="/projects"
                  className="bg-highlight text-main font-bold px-10 py-4 rounded-full shadow hover:bg-secondary transition text-center text-xl"
                >
                  Lihat Proyek
                </a>
                <a
                  href="/resume"
                  className="border-2 border-highlight text-highlight px-10 py-4 rounded-full font-bold shadow hover:bg-highlight hover:text-main transition text-center text-xl"
                >
                  Resume/CV
                </a>
                <a
                  href="/contact"
                  className="bg-main text-highlight font-bold px-10 py-4 rounded-full shadow hover:bg-highlight hover:text-main border-2 border-highlight transition text-center text-xl"
                >
                  Kontak Saya
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatedContent>
      </div>
    </main>
  </div>
);

export default Home;

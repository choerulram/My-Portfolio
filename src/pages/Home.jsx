import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Home = () => (
  <div className="min-h-screen flex flex-col bg-light dark:bg-dark text-dark dark:text-light">
    <main className="flex-1 container mx-auto px-6 py-12 flex flex-col items-center justify-center">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-highlight mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">Nama Anda</h2>
      <p className="text-lg mb-4 text-center max-w-xl">
        Deskripsi singkat tentang Anda, keahlian utama, dan value yang Anda
        tawarkan. Contoh: Frontend Developer | UI/UX Enthusiast
      </p>
      <div className="flex space-x-4 mt-4">
        <a
          href="/projects"
          className="bg-highlight text-main font-semibold px-6 py-2 rounded hover:bg-secondary transition"
        >
          Lihat Proyek
        </a>
        <a
          href="/contact"
          className="border border-highlight text-highlight px-6 py-2 rounded hover:bg-highlight hover:text-main transition"
        >
          Kontak Saya
        </a>
      </div>
    </main>
  </div>
);

export default Home;

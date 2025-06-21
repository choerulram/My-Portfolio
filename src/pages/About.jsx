import React from "react";

const About = () => (
  <div className="min-h-screen flex flex-col bg-dark text-light">
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
      {/* Liquid Glass Section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Foto/Ilustrasi */}
        <div className="md:col-span-1 flex flex-col items-center justify-start">
          <div className="w-40 h-40 rounded-2xl border-4 border-highlight shadow-lg bg-white/10 backdrop-blur-lg flex items-center justify-center mb-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-2xl object-cover"
            />
          </div>
          <div className="mt-2 text-center text-secondary text-lg font-semibold">Nama Anda</div>
        </div>
        {/* Konten About */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {/* Profil Lengkap */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6 mb-2">
            <h2 className="text-xl font-bold text-highlight mb-2">Profil Lengkap</h2>
            <p className="text-base opacity-90">
              Saya memulai perjalanan di dunia teknologi sejak kuliah di Teknik Informatika. Berpengalaman dalam pengembangan web modern, saya telah mengerjakan berbagai proyek mulai dari website company profile hingga aplikasi dashboard interaktif.
            </p>
          </section>
          {/* Value & Passion */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6 mb-2">
            <h2 className="text-xl font-bold text-highlight mb-2">Value & Passion</h2>
            <p className="text-base opacity-90">
              Saya sangat menikmati proses menciptakan antarmuka yang tidak hanya indah, tapi juga mudah digunakan. Passion saya adalah menggabungkan teknologi dan desain untuk memberikan pengalaman terbaik bagi pengguna.
            </p>
          </section>
          {/* Hobi/Personal Interest */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6">
            <h2 className="text-xl font-bold text-highlight mb-2">Hobi & Minat Pribadi</h2>
            <p className="text-base opacity-90">
              Di luar dunia coding, saya suka fotografi, membaca buku pengembangan diri, dan bersepeda santai di akhir pekan.
            </p>
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

export default About;

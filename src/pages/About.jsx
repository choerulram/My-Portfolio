import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, ease: "easeOut", duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => (
  <div className="min-h-screen flex flex-col bg-dark text-light">
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-16 px-2 md:px-4">
      {/* Liquid Glass Section */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Foto/Ilustrasi */}
        <motion.div
          className="md:col-span-1 flex flex-col items-center justify-start"
          variants={itemVariants}
        >
          <motion.div
            className="w-36 h-36 md:w-56 md:h-56 rounded-3xl border-4 border-secondary shadow-2xl bg-secondary/6 backdrop-blur-lg flex items-center justify-center mb-4 md:mb-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 280 }}
          >
            <motion.img
              src="/assets/images/profile.jpg"
              alt="Foto Profil"
              className="w-32 h-32 md:w-52 md:h-52 rounded-3xl object-cover shadow-inner"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div
            className="mt-2 text-center text-secondary text-xl md:text-2xl font-bold"
            variants={itemVariants}
          >
            Achmad Choerul Ramdhani
          </motion.div>
          <motion.div
            className="text-center text-xs md:text-sm text-muted mt-1"
            variants={itemVariants}
          >
            Lulusan Baru
          </motion.div>

          <motion.div
            className="mt-4 md:mt-6 w-full px-2 md:px-4"
            variants={itemVariants}
          >
            <div className="text-center p-2 md:p-3 rounded-lg bg-gradient-to-r from-secondary/10 via-secondary/8 to-secondary/10 border border-secondary/10">
              <div className="text-xs md:text-sm text-muted">
                Siap untuk kontribusi
              </div>
              <div className="font-medium text-sm md:text-base">
                Mencari kesempatan sebagai Pengembang Web Junior
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Konten About */}
        <div className="md:col-span-1 flex flex-col gap-4 md:gap-6">
          {/* Tentang Saya */}
          <motion.section
            className="bg-gradient-to-br from-secondary/15 via-secondary/10 to-secondary/5 backdrop-blur-lg rounded-2xl border-2 border-secondary/30 shadow-[0_0_30px_-5px_rgba(206,237,178,0.2)] p-4 md:p-8 flex flex-col justify-center ring-1 ring-secondary/30 hover:shadow-[0_0_40px_-5px_rgba(206,237,178,0.25)] transition-shadow duration-300"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-3 md:mb-4 drop-shadow-[0_0_8px_rgba(206,237,178,0.3)]">
              Tentang Saya
            </h2>
            <p className="text-base md:text-xl text-light opacity-100 leading-relaxed mb-3 md:mb-4">
              Saya adalah seorang lulusan baru Jurusan Teknik Informatika dari
              Politeknik Negeri Cilacap yang memiliki ketertarikan kuat pada
              bidang pengembangan web dan teknologi informasi.
            </p>
            <p className="text-sm md:text-lg text-light opacity-95">
              Selama lebih dari tiga tahun, saya telah mengasah kemampuan di
              bidang pemrograman dan pengembangan aplikasi web. Saya
              berpengalaman menggunakan Laravel, CodeIgniter, dan React.js untuk
              membangun solusi web yang interaktif, efisien, dan berorientasi
              pada kebutuhan pengguna.
            </p>
          </motion.section>
        </div>
      </motion.div>
      {/* Liquid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </main>
  </div>
);

export default About;

import React, { useEffect, useState } from "react";
import Lanyard from "../components/Lanyard";
import AnimatedContent from "../components/Animations/AnimatedContent/AnimatedContent";
import { motion } from "framer-motion";

const typedName = "Achmad Choerul R.";

const TYPING_SPEED = 130; // ms per character
const DELETING_SPEED = 60; // ms per character
const DELAY_AFTER_TYPING = 1200; // ms
const DELAY_AFTER_DELETING = 600; // ms

const Home = () => {
  const [displayedName, setDisplayedName] = useState("");
  const i = React.useRef(0);
  const isDeletingRef = React.useRef(false);

  useEffect(() => {
    let timeout;
    let isMounted = true;
    // Delay sebelum mulai mengetik (setelah animasi masuk selesai)
    const startDelay = 800;
    timeout = setTimeout(() => {
      const typeLoop = () => {
        if (!isMounted) return;
        if (!isDeletingRef.current) {
          setDisplayedName(typedName.slice(0, i.current + 1));
          if (i.current < typedName.length - 1) {
            i.current++;
            timeout = setTimeout(typeLoop, TYPING_SPEED);
          } else {
            timeout = setTimeout(() => {
              isDeletingRef.current = true;
              i.current = typedName.length - 1;
              setDisplayedName(typedName); // trigger re-render
              typeLoop();
            }, DELAY_AFTER_TYPING);
          }
        } else {
          setDisplayedName(typedName.slice(0, i.current));
          if (i.current > 0) {
            i.current--;
            timeout = setTimeout(typeLoop, DELETING_SPEED);
          } else {
            isDeletingRef.current = false;
            i.current = 0;
            setDisplayedName(""); // trigger re-render
            timeout = setTimeout(typeLoop, DELAY_AFTER_DELETING);
          }
        }
      };
      typeLoop();
    }, startDelay);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-light relative">
      {/* Overlay Lanyard */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="fixed inset-0 z-30 pointer-events-none">
          <Lanyard position={[5, 0, 15]} gravity={[0, -40, 0]} />
        </div>
        {/* Background Gradient & Blurred Spot */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-highlight/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900/80 to-black opacity-90" />
        </div>
        {/* Layout: Konten kiri, lanyard kanan */}
        <div className="relative z-10 w-full max-w-screen-2xl flex flex-row items-center justify-start gap-10 py-16 md:py-4t pl-20">
          {/* Konten kiri */}
          <div className="flex flex-col items-start justify-center w-auto self-start pl-0 py-8 md:py-16">
            <AnimatedContent>
              <motion.h1
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-highlight via-secondary to-main drop-shadow-lg text-left leading-tight"
              >
                {displayedName}
                <span className="inline-block w-2 animate-pulse align-middle">
                  |
                </span>
              </motion.h1>
              <motion.h2
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-2xl font-semibold mb-6 text-accent text-left drop-shadow"
              >
                Web Developer Enthusiast
              </motion.h2>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-base md:text-lg mb-10 text-left max-w-lg opacity-90 leading-relaxed drop-shadow text-light/90"
              >
                Saya adalah seorang developer yang berfokus pada pembuatan
                antarmuka modern, responsif, dan user-friendly. Passion saya di
                bidang teknologi dan desain membantu saya menciptakan solusi
                digital yang impactful dan estetik.
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                className="flex flex-row gap-4 md:gap-7 w-full justify-start flex-wrap"
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-highlight to-secondary text-main font-bold px-6 md:px-8 py-2.5 md:py-3.5 rounded-full shadow-lg hover:from-secondary hover:to-highlight transition text-center text-base md:text-lg"
                >
                  Lihat Proyek
                </motion.a>
                <motion.a
                  href="/resume"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-accent text-accent px-6 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold shadow hover:bg-accent hover:text-main transition text-center text-base md:text-lg"
                >
                  Resume/CV
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    y: [0, -8, 0, 8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="bg-main text-highlight font-bold px-6 md:px-8 py-2.5 md:py-3.5 rounded-full shadow hover:bg-highlight hover:text-main border-2 border-highlight transition text-center text-base md:text-lg"
                >
                  Kontak Saya
                </motion.a>
              </motion.div>
            </AnimatedContent>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

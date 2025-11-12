import React, { useEffect, useState } from "react";
// import Lanyard from "../components/Lanyard";
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
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Animated bulatan/bintang kecil di bagian atas */}
        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none flex justify-center items-start">
          {/* Bulatan 1 */}
          <motion.div
            className="absolute left-8 top-6"
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              scale: [0.7, 1, 1.1, 1],
              y: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
            style={{ width: 24, height: 24 }}
          >
            <svg width={24} height={24}>
              <circle cx={12} cy={12} r={10} fill="#CEF17B" />
            </svg>
          </motion.div>
          {/* Bulatan 2 */}
          <motion.div
            className="absolute left-1/2 top-10"
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              scale: [0.7, 1, 1.1, 1],
              y: [0, -6, 0, 6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ width: 18, height: 18 }}
          >
            <svg width={18} height={18}>
              <circle cx={9} cy={9} r={7} fill="#CEEDB2" />
            </svg>
          </motion.div>
          {/* Bulatan 3 */}
          <motion.div
            className="absolute right-12 top-16"
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              scale: [0.7, 1, 1.1, 1],
              y: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{ width: 14, height: 14 }}
          >
            <svg width={14} height={14}>
              <circle cx={7} cy={7} r={6} fill="#084734" />
            </svg>
          </motion.div>
          {/* Bulatan 4 (opsional, bintang) */}
          <motion.div
            className="absolute left-1/4 top-20"
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              scale: [0.7, 1, 1.1, 1],
              y: [0, 6, 0, -6, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{ width: 10, height: 10 }}
          >
            <svg width={10} height={10}>
              <circle cx={5} cy={5} r={4} fill="#CEF17B" />
            </svg>
          </motion.div>
          {/* Bulatan 5 (opsional, bintang) */}
          <motion.div
            className="absolute right-1/4 top-8"
            initial={{ opacity: 0, scale: 0.7, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              scale: [0.7, 1, 1.1, 1],
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
            style={{ width: 12, height: 12 }}
          >
            <svg width={12} height={12}>
              <circle cx={6} cy={6} r={5} fill="#CEEDB2" />
            </svg>
          </motion.div>
        </div>
        {/* Animated SVG Blob sebagai background utama */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <motion.svg
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            viewBox="0 0 600 600"
            className="w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem] lg:w-[48rem] lg:h-[48rem]"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.path
              d="M421.5,321Q410,392,340,420Q270,448,210,410Q150,372,144,301Q138,230,200,180Q262,130,340,160Q418,190,426,260Q434,330,421.5,321Z"
              fill="url(#blobGradient)"
              initial={{
                d: "M421.5,321Q410,392,340,420Q270,448,210,410Q150,372,144,301Q138,230,200,180Q262,130,340,160Q418,190,426,260Q434,330,421.5,321Z",
              }}
              animate={{
                d: [
                  "M421.5,321Q410,392,340,420Q270,448,210,410Q150,372,144,301Q138,230,200,180Q262,130,340,160Q418,190,426,260Q434,330,421.5,321Z",
                  "M400,320Q390,400,320,430Q250,460,200,410Q150,360,160,290Q170,220,230,170Q290,120,360,150Q430,180,440,250Q450,320,400,320Z",
                  "M421.5,321Q410,392,340,420Q270,448,210,410Q150,372,144,301Q138,230,200,180Q262,130,340,160Q418,190,426,260Q434,330,421.5,321Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#CEF17B" /> {/* highlight */}
                <stop offset="50%" stopColor="#CEEDB2" /> {/* secondary */}
                <stop offset="100%" stopColor="#084734" /> {/* main */}
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
        {/* Konten utama */}
        <div className="relative z-10 w-full max-w-screen-2xl flex flex-row items-center justify-start gap-10 py-16 md:py-24 pl-8 md:pl-20">
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
                Lulusan Baru Teknik Informatika
              </motion.h2>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-base md:text-lg mb-10 text-left max-w-lg opacity-90 leading-relaxed drop-shadow text-light/90"
              >
                Halo, saya Achmad Choerul Ramdhani.
                <br />
                Lulusan Baru Teknik Informatika — siap berkontribusi di dunia
                pengembangan web.
              </motion.p>
              {/* Tombol dihapus sesuai permintaan */}
            </AnimatedContent>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ImageSlideshow() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const images = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [nextSlide]);

  const scrollToOffer = () => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 6, ease: "linear" },
              x: { duration: 0.8 }
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white px-6 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
            style={{
              textShadow: '0 10px 40px rgba(0,0,0,0.8)',
            }}
          >
            Byty v Raji
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="h-1 w-32 bg-white mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-2xl md:text-3xl font-light mb-8 tracking-wide uppercase"
            style={{
              textShadow: '0 5px 20px rgba(0,0,0,0.6)',
            }}
          >
            Bytový dom
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 5px 20px rgba(0,0,0,0.6)',
            }}
          >
            Nadštandardné bývanie v modernom bytovom dome v unikátnej prírode
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
      >
        <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
          <div className="flex items-center gap-2.5">
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? 'w-10 h-2.5 bg-white shadow-lg shadow-white/50'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToOffer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white z-20 transition-colors pointer-events-auto"
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}

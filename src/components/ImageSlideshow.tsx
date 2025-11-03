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
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{
              scale: { duration: 5, ease: "linear" },
              opacity: { duration: 1.2, ease: "easeInOut" }
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
        className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
            className="text-white/70 hover:text-white transition-colors group pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-[1px] bg-white/40 group-hover:bg-white transition-colors"></div>
              <span className="text-sm font-light tracking-widest uppercase">Prev</span>
            </div>
          </motion.button>

          <div className="flex flex-col items-center gap-4 pointer-events-auto">
            <div className="flex items-center gap-3">
              {images.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30'
                      : 'w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/60'
                  }`} />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="text-white/50 text-xs font-light tracking-[0.3em] uppercase"
            >
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </motion.div>
          </div>

          <motion.button
            onClick={() => goToSlide((currentIndex + 1) % images.length)}
            className="text-white/70 hover:text-white transition-colors group pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-light tracking-widest uppercase">Next</span>
              <div className="w-12 h-[1px] bg-white/40 group-hover:bg-white transition-colors"></div>
            </div>
          </motion.button>
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
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white z-20 transition-colors pointer-events-auto"
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}

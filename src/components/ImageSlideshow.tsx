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
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{
              opacity: idx === currentIndex ? 1 : 0,
              scale: idx === currentIndex ? 1 : 1.1,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
            </div>
          </motion.div>
        ))}
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
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-3">
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-12 h-3 bg-white shadow-lg shadow-white/50'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToOffer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 1 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white z-20 transition-colors"
        whileHover={{ scale: 1.3 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={44} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}

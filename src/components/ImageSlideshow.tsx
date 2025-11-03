import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function ImageSlideshow() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const images = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoplay();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all hover:scale-110 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={2} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all hover:scale-110 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={2} />
      </button>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-white px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl">
            Byty v Raji
          </h1>
          <p className="text-xl md:text-3xl font-light mb-4 tracking-wide drop-shadow-lg">
            Bytový dom
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 drop-shadow-lg">
            Nadštandardné bývanie v modernom bytovom dome v unikátnej prírode
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? 'w-12 h-3 bg-white shadow-lg shadow-white/50'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === currentIndex && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-white rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={scrollToOffer}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform z-20"
        aria-label="Scroll down"
      >
        <ChevronDown size={48} strokeWidth={1.5} />
      </button>
    </section>
  );
}

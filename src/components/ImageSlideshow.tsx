import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function ImageSlideshow() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const images = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setProgress(0);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  }, [images.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    if (isPlaying) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 6000);

      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / 600);
        });
      }, 10);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const scrollToOffer = () => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black group">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-all duration-300 bg-black/10 hover:bg-black/30 backdrop-blur-md rounded-full p-3 md:p-4 border border-white/10 hover:border-white/30 opacity-0 group-hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-all duration-300 bg-black/10 hover:bg-black/30 backdrop-blur-md rounded-full p-3 md:p-4 border border-white/10 hover:border-white/30 opacity-0 group-hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </motion.button>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center text-white px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <div className="h-px w-16 bg-white/40 mx-auto mb-8"></div>
          </motion.div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wider drop-shadow-2xl">
            Byty v Raji
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl lg:text-3xl font-extralight mb-6 tracking-widest uppercase drop-shadow-lg opacity-80"
          >
            Bytový dom
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="h-px w-24 bg-white/30 mx-auto mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light opacity-75 drop-shadow-lg">
              Nadštandardné bývanie v modernom bytovom dome v unikátnej prírode
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 z-30 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          onClick={togglePlayPause}
          className="text-white/60 hover:text-white transition-all bg-black/10 hover:bg-black/30 backdrop-blur-md rounded-full p-3 border border-white/10 hover:border-white/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} strokeWidth={1.5} /> : <Play size={20} strokeWidth={1.5} />}
        </motion.button>
        <div className="text-white/60 text-sm font-light backdrop-blur-md bg-black/10 px-4 py-2 rounded-full border border-white/10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-black/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="relative group"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-white/60 group-hover:scale-150'
                }`}
              >
                {idx === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                  >
                    <motion.div
                      className="h-full bg-white/50"
                      style={{ width: `${progress}%` }}
                    />
                  </motion.div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <motion.button
        onClick={scrollToOffer}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white z-20 transition-colors"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.button>
    </section>
  );
}

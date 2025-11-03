import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronDown } from 'lucide-react';

export default function ImageSlideshow() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const images = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollToOffer = () => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {images.map((image, index) => (
            <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
            onClick={() => scrollTo(idx)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              idx === selectedIndex
                ? 'w-12 h-3 bg-white shadow-lg shadow-white/50'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === selectedIndex && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-white"
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

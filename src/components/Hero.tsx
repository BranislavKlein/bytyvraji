import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom"
        style={{
          backgroundImage: 'url(https://bytyvraji.sk/up_cingov.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto mt-16 sm:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
          Byty v Raji
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 tracking-wide">
          Bytový dom
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8 sm:mb-12 px-4">
          Nadštandardné bývanie v modernom bytovom dome v unikátnej prírode
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <Link
            to="/o-projekte"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Viac o projekte
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            to="/podorys"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all hover:scale-105"
          >
            Pôdorysy a ceny
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToOffer}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12" />
      </button>
    </section>
  );
}

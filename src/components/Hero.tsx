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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Byty v Raji
        </h1>
        <p className="text-xl md:text-3xl font-light mb-4 tracking-wide">
          Bytový dom
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-12">
          Nadštandardné bývanie v modernom bytovom dome v unikátnej prírode
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/o-projekte"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Viac o projekte
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/ponuka"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105"
          >
            Pozrieť byty
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToOffer}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll down"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
}

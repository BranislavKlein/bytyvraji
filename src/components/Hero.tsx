import { ChevronDown } from 'lucide-react';

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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Byty v Raji
        </h1>
        <p className="text-xl md:text-3xl font-light mb-4 tracking-wide">
          Bytový dom
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
          Nadštandardné bývanie v modernom bytovom dome v unikátnej prírode
        </p>
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

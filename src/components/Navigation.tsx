import { Menu, X, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const shouldBeTransparent = isHomePage && !isScrolled;

  const linkClass = (path: string) =>
    `relative px-4 py-2 text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 group ${
      shouldBeTransparent
        ? isActive(path)
          ? 'text-amber-400'
          : 'text-white hover:text-amber-300'
        : isActive(path)
          ? 'text-amber-600'
          : 'text-stone-700 hover:text-amber-600'
    }`;

  const mobileLinkClass = (path: string) =>
    `block w-full text-left px-6 py-4 text-base font-medium transition-all duration-200 ${
      isActive(path)
        ? 'text-amber-600 bg-amber-50 border-l-4 border-amber-600'
        : 'text-stone-700 hover:text-amber-600 hover:bg-amber-50'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldBeTransparent
          ? 'bg-transparent'
          : 'bg-white shadow-lg border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className={`relative p-1.5 sm:p-2 rounded-lg transition-all duration-300 ${
              shouldBeTransparent
                ? 'bg-white/20 group-hover:bg-white/30'
                : 'bg-amber-50 group-hover:bg-amber-100'
            }`}>
              <img
                src="https://bytyvraji.sk/centrum_real.png"
                alt="Centrum Real"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-sm sm:text-base lg:text-lg font-light tracking-[0.15em] sm:tracking-[0.25em] transition-all duration-300 ${
                shouldBeTransparent ? 'text-white' : 'text-stone-900'
              }`}>
                BYTY V RAJI
              </h1>
              <span className={`text-[10px] sm:text-xs font-light tracking-wider transition-all duration-300 ${
                shouldBeTransparent ? 'text-white/80' : 'text-stone-600'
              }`}>
                Centrum Real
              </span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link to="/podorys" className={linkClass('/podorys')}>
                <span className="relative z-10">Pôdorys</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                  shouldBeTransparent
                    ? 'bg-amber-400'
                    : 'bg-amber-600'
                } ${
                  isActive('/podorys') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link to="/o-projekte" className={linkClass('/o-projekte')}>
                <span className="relative z-10">O projekte</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                  shouldBeTransparent
                    ? 'bg-amber-400'
                    : 'bg-amber-600'
                } ${
                  isActive('/o-projekte') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link to="/galeria" className={linkClass('/galeria')}>
                <span className="relative z-10">Galéria</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                  shouldBeTransparent
                    ? 'bg-amber-400'
                    : 'bg-amber-600'
                } ${
                  isActive('/galeria') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link to="/kontakt" className={linkClass('/kontakt')}>
                <span className="relative z-10">Kontakt</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                  shouldBeTransparent
                    ? 'bg-amber-400'
                    : 'bg-amber-600'
                } ${
                  isActive('/kontakt') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                shouldBeTransparent
                  ? 'text-white bg-white/20 hover:bg-white/30'
                  : 'text-stone-900 bg-stone-100 hover:bg-stone-200'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        <div className={`relative h-full flex flex-col bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 shadow-2xl transition-all duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } max-w-sm`}>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217 119 6) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative px-6 py-8 border-b border-amber-500/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-600/20 rounded-lg">
                <img
                  src="https://bytyvraji.sk/centrum_real.png"
                  alt="Centrum Real"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-light tracking-widest text-white">BYTY V RAJI</h2>
                <p className="text-xs text-amber-400 font-light tracking-wide">Centrum Real</p>
              </div>
            </div>
          </div>

          <nav className="relative flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-2">
              <Link
                to="/podorys"
                onClick={() => setIsOpen(false)}
                className={`group block px-5 py-4 rounded-xl transition-all duration-300 ${
                  isActive('/podorys')
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-600/30'
                    : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base font-light tracking-wide ${
                    isActive('/podorys') ? 'text-white' : 'text-stone-200 group-hover:text-white'
                  }`}>
                    Pôdorys
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive('/podorys') ? 'text-white' : 'text-amber-500'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                to="/o-projekte"
                onClick={() => setIsOpen(false)}
                className={`group block px-5 py-4 rounded-xl transition-all duration-300 ${
                  isActive('/o-projekte')
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-600/30'
                    : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base font-light tracking-wide ${
                    isActive('/o-projekte') ? 'text-white' : 'text-stone-200 group-hover:text-white'
                  }`}>
                    O projekte
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive('/o-projekte') ? 'text-white' : 'text-amber-500'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                to="/galeria"
                onClick={() => setIsOpen(false)}
                className={`group block px-5 py-4 rounded-xl transition-all duration-300 ${
                  isActive('/galeria')
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-600/30'
                    : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base font-light tracking-wide ${
                    isActive('/galeria') ? 'text-white' : 'text-stone-200 group-hover:text-white'
                  }`}>
                    Galéria
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive('/galeria') ? 'text-white' : 'text-amber-500'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className={`group block px-5 py-4 rounded-xl transition-all duration-300 ${
                  isActive('/kontakt')
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-600/30'
                    : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base font-light tracking-wide ${
                    isActive('/kontakt') ? 'text-white' : 'text-stone-200 group-hover:text-white'
                  }`}>
                    Kontakt
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive('/kontakt') ? 'text-white' : 'text-amber-500'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </nav>

          <div className="relative px-6 py-6 border-t border-amber-500/20 bg-stone-900/50 backdrop-blur-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-stone-300">
                <div className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-light">Zavolajte</p>
                  <a href="tel:+421948527246" className="text-sm text-white hover:text-amber-400 transition-colors font-light">
                    +421 948 527 246
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-stone-300">
                <div className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-light">Email</p>
                  <a href="mailto:michaela.schutz@centrumreal.sk" className="text-sm text-white hover:text-amber-400 transition-colors font-light break-all">
                    michaela.schutz@centrumreal.sk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

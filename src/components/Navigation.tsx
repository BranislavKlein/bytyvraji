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
          ? 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
          : 'bg-white shadow-lg border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`relative p-2 rounded-lg transition-all duration-300 ${
              shouldBeTransparent
                ? 'bg-white/10 backdrop-blur-md group-hover:bg-white/20'
                : 'bg-amber-50 group-hover:bg-amber-100'
            }`}>
              <Building2 className={`w-5 h-5 transition-all duration-300 ${
                shouldBeTransparent ? 'text-white' : 'text-amber-600'
              }`} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-lg font-light tracking-[0.25em] transition-all duration-300 ${
                shouldBeTransparent ? 'text-white' : 'text-stone-900'
              }`}>
                BYTY V RAJI
              </h1>
              <span className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 ${
                shouldBeTransparent ? 'text-white/80' : 'text-stone-500'
              }`}>
                Apartmány Vraje
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
                  ? 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-md'
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`border-t ${
          shouldBeTransparent
            ? 'bg-black/60 backdrop-blur-xl border-white/10'
            : 'bg-white border-stone-200'
        }`}>
          <div className="py-2">
            <Link
              to="/podorys"
              className={mobileLinkClass('/podorys')}
              onClick={() => setIsOpen(false)}
            >
              Pôdorys
            </Link>
            <Link
              to="/o-projekte"
              className={mobileLinkClass('/o-projekte')}
              onClick={() => setIsOpen(false)}
            >
              O projekte
            </Link>
            <Link
              to="/galeria"
              className={mobileLinkClass('/galeria')}
              onClick={() => setIsOpen(false)}
            >
              Galéria
            </Link>
            <Link
              to="/kontakt"
              className={mobileLinkClass('/kontakt')}
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Menu, X, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${
      isActive(path)
        ? 'text-amber-600'
        : 'text-stone-700 hover:text-amber-600'
    }`;

  const mobileLinkClass = (path: string) =>
    `block w-full text-left px-6 py-4 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200 ${
      isActive(path) ? 'text-amber-600 bg-amber-50 border-l-4 border-amber-600' : ''
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-lg'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 p-2.5 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                <Building2 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-stone-800 tracking-wider group-hover:text-amber-600 transition-colors duration-300">
                BYTY V RAJI
              </h1>
              <span className="text-xs text-stone-500 tracking-widest uppercase">
                Bytový dom
              </span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link to="/podorys" className={linkClass('/podorys')}>
                <span className="relative z-10">Pôdorys</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform duration-300 ${
                  isActive('/podorys') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link to="/o-projekte" className={linkClass('/o-projekte')}>
                <span className="relative z-10">O projekte</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform duration-300 ${
                  isActive('/o-projekte') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link to="/galeria" className={linkClass('/galeria')}>
                <span className="relative z-10">Galéria</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform duration-300 ${
                  isActive('/galeria') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link to="/kontakt" className={linkClass('/kontakt')}>
                <span className="relative z-10">Kontakt</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform duration-300 ${
                  isActive('/kontakt') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-amber-600 p-2 rounded-lg hover:bg-amber-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`border-t border-stone-200 ${isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'}`}>
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

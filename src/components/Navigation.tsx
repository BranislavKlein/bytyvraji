import { Menu, X } from 'lucide-react';
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
    `px-3 py-2 text-sm font-light tracking-wide transition-colors ${
      isActive(path) ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
    }`;

  const mobileLinkClass = (path: string) =>
    `block w-full text-left px-3 py-2 text-base font-light text-stone-700 hover:text-amber-600 hover:bg-stone-50 ${
      isActive(path) ? 'text-amber-600 bg-stone-50' : ''
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-stone-200 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md backdrop-blur-md'
          : 'bg-white/20 shadow-sm backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            
            <h1 className="text-2xl font-light text-stone-800 tracking-widest hover:text-amber-600 transition-colors">
              BYTY V RAJI
            </h1>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              
              <Link to="/podorys" className={linkClass('/podorys')}>
                Pôdorys
              </Link>
              <Link to="/o-projekte" className={linkClass('/o-projekte')}>
                O projekte
              </Link>
              <Link to="/galeria" className={linkClass('/galeria')}>
                Galéria
              </Link>
              <Link to="/kontakt" className={linkClass('/kontakt')}>
                Kontakt
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-amber-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden border-t border-stone-200 transition-all duration-300 ${
            isScrolled ? 'bg-white' : 'bg-white/20 backdrop-blur-sm'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/ponuka"
              className={mobileLinkClass('/ponuka')}
              onClick={() => setIsOpen(false)}
            >
              Ponuka
            </Link>
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
      )}
    </nav>
  );
}

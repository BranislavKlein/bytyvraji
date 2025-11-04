import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-8 sm:py-10 lg:py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4 tracking-widest">BYTY V RAJI</h3>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
              Moderný bytový dom s nadštandardným bývaním a kompletným zázemím.
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-light mb-3 sm:mb-4">Rýchle odkazy</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/ponuka"
                  className="text-stone-400 hover:text-amber-600 transition-colors font-light"
                >
                  Ponuka
                </Link>
              </li>
              <li>
                <Link
                  to="/podorys"
                  className="text-stone-400 hover:text-amber-600 transition-colors font-light"
                >
                  Pôdorys
                </Link>
              </li>
              <li>
                <Link
                  to="/o-projekte"
                  className="text-stone-400 hover:text-amber-600 transition-colors font-light"
                >
                  O projekte
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="text-stone-400 hover:text-amber-600 transition-colors font-light"
                >
                  Galéria
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-stone-400 hover:text-amber-600 transition-colors font-light"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm sm:text-base font-light mb-3 sm:mb-4">Kontakt</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-stone-400 font-light">
              <li className="break-all">Email: michaela.schutz@centrumreal.sk</li>
              <li>Tel: +421 948 527 246</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-stone-400">
          <p className="font-light px-4">&copy; {new Date().getFullYear()} REAL CENTRUM. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}

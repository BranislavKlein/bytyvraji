import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light mb-4 tracking-widest">BYTY V RAJI</h3>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Moderný bytový dom s nadštandardným bývaním a kompletným zázemím.
            </p>
          </div>

          <div>
            <h4 className="font-light mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2 text-sm">
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

          <div>
            <h4 className="font-light mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-stone-400 font-light">
              <li>Email: </li>
              <li>Tel: +421 XXX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
          <p className="font-light">&copy; {new Date().getFullYear()} REAL CENTRUM. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}

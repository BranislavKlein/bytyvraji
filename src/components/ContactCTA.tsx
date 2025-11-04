import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-3xl overflow-hidden shadow-2xl border border-amber-100"
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217 119 6) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-600 px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">Obhliadka</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight leading-tight">
                Naplánujte si osobnú obhliadku
              </h2>

              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Radi vám priblížime všetky detaily projektu a odpovieme na vaše otázky.
                Zistite viac o dostupných bytoch a možnostiach financovania.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500 mb-1">Zavolajte nám</div>
                    <a href="tel:+421123456789" className="text-stone-900 hover:text-amber-600 transition-colors font-medium">
                      +421 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500 mb-1">Napíšte nám</div>
                    <a href="mailto:info@bytyvraji.sk" className="text-stone-900 hover:text-amber-600 transition-colors font-medium">
                      info@bytyvraji.sk
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Naplánovať obhliadku
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-stone-900 mb-2">Flexibilný termín</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Prispôsobíme sa vášmu času. Obhliadky realizujeme aj cez víkend.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-stone-900 mb-2">Odborné poradenstvo</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Pomôžeme vám vybrať ideálny byt a poradíme s financovaním.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-stone-900 mb-2">Lokalita</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Ukážeme vám okolie a priblížime výhody bývania v Slovenskom Raji.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Building2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

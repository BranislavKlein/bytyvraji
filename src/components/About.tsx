import { MapPin, Clock, CheckCircle2, Building2, Trees, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-stone-900">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">O projekte</h1>
            <div className="h-px w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-stone-300 font-light max-w-3xl mx-auto leading-relaxed">
              Moderná architektúra spojená s komfortom a kvalitou bývania v srdci prírody
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] mb-20 overflow-hidden"
          >
            <img
              src="https://bytyvraji.sk/4e.jpg"
              alt="Byty v Raji"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-stone-800 p-12 hover:bg-stone-750 transition-colors group"
            >
              <MapPin className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Lokácia</h3>
              <p className="text-stone-400 leading-relaxed font-light">
                Výnimočná poloha v atraktívnej lokalite s kompletnou občianskou vybavenosťou.
                V blízkosti nájdete školy, škôlky, obchody, reštaurácie a výborné dopravné spojenie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-stone-800 p-12 hover:bg-stone-750 transition-colors group"
            >
              <Clock className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Termín dokončenia</h3>
              <p className="text-stone-400 leading-relaxed font-light">
                Plánované dokončenie projektu je v priebehu roka 2025.
                Výstavba prebieha podľa harmonogramu s najvyšším dôrazom na kvalitu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-stone-800 p-12 hover:bg-stone-750 transition-colors group"
            >
              <Sparkles className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Kvalita</h3>
              <p className="text-stone-400 leading-relaxed font-light">
                Využitie moderných materiálov a technológií zabezpečuje vysoký štandard bývania
                s dôrazom na energetickú úspornosť a ekológiu.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-light text-white mb-12 text-center">Prečo si vybrať Byty v Raji</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden group">
                <div className="bg-amber-600 p-10 h-full">
                  <Building2 className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">Moderný dizajn</h3>
                  <p className="text-amber-50 font-light leading-relaxed">
                    Elegantná architektúra s dôrazom na detail a funkčnosť
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="relative overflow-hidden group">
                <div className="bg-stone-800 p-10 h-full border border-stone-700">
                  <Trees className="w-12 h-12 text-amber-600 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">V srdci prírody</h3>
                  <p className="text-stone-300 font-light leading-relaxed">
                    Unikátne prostredie pre kvalitný život v harmónii s prírodou
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="relative overflow-hidden group">
                <div className="bg-stone-800 p-10 h-full border border-stone-700">
                  <Shield className="w-12 h-12 text-amber-600 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">Bezpečnosť</h3>
                  <p className="text-stone-300 font-light leading-relaxed">
                    Moderné zabezpečenie vášho domova na najvyššej úrovni
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-800 border border-stone-700 p-14"
          >
            <h3 className="text-3xl font-light text-white mb-12 text-center">Výhody projektu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
              {[
                'Moderná architektúra a dizajn',
                'Podzemné parkovanie',
                'Kvalitné materiály a vybavenie',
                'Energeticky úsporné riešenia',
                'Balkóny a terasy s výhľadom',
                'Bezpečnostný systém',
                'Výťah vo všetkých poschodiach',
                'Úložné priestory'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-stone-300 font-light text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

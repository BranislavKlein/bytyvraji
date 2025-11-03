import { MapPin, Clock, CheckCircle2, Building2, Trees, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white via-stone-50 to-white">
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://bytyvraji.sk/4e.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-50"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-6 max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-7xl font-light mb-6 tracking-tight"
            >
              O projekte
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-0.5 w-32 bg-white mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl font-light leading-relaxed"
            >
              Moderná architektúra spojená s komfortom a kvalitou bývania v srdci prírody
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
          >
            <div className="mb-6 inline-flex p-4 bg-amber-50 rounded-full">
              <MapPin className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Lokácia</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              Výnimočná poloha v atraktívnej lokalite s kompletnou občianskou vybavenosťou.
              V blízkosti nájdete školy, škôlky, obchody, reštaurácie a výborné dopravné spojenie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
          >
            <div className="mb-6 inline-flex p-4 bg-amber-50 rounded-full">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Termín dokončenia</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              Plánované dokončenie projektu je v priebehu roka 2025.
              Výstavba prebieha podľa harmonogramu s najvyšším dôrazom na kvalitu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
          >
            <div className="mb-6 inline-flex p-4 bg-amber-50 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">Kvalita</h3>
            <p className="text-stone-600 leading-relaxed font-light">
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
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-12 text-white shadow-lg">
              <Building2 className="w-12 h-12 mb-6 opacity-90" />
              <h3 className="text-3xl font-light mb-3">Moderný dizajn</h3>
              <p className="font-light opacity-95">Elegantná architektúra s dôrazom na detail</p>
            </div>
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-12 text-white shadow-lg">
              <Trees className="w-12 h-12 mb-6 opacity-90" />
              <h3 className="text-3xl font-light mb-3">V srdci prírody</h3>
              <p className="font-light opacity-95">Unikátne prostredie pre kvalitný život</p>
            </div>
            <div className="bg-gradient-to-br from-stone-700 to-stone-800 p-12 text-white shadow-lg">
              <Shield className="w-12 h-12 mb-6 opacity-90" />
              <h3 className="text-3xl font-light mb-3">Bezpečnosť</h3>
              <p className="font-light opacity-95">Moderné zabezpečenie vášho domova</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-stone-200 p-12 md:p-16 shadow-sm"
        >
          <h3 className="text-3xl font-light text-stone-900 mb-12 text-center">Výhody projektu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Moderná architektúra a dizajn</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Podzemné parkovanie</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Kvalitné materiály a vybavenie</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Energeticky úsporné riešenia</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Balkóny a terasy s výhľadom</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Bezpečnostný systém</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Výťah vo všetkých poschodiach</p>
            </div>
            <div className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-stone-700 font-light text-lg">Úložné priestory</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

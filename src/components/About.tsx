import { MapPin, Calendar, CheckCircle2, Sparkles, Award, TrendingUp, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import OsMap from './map';

export default function About() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const galleryImages = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="about" className="bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 px-5 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-amber-700" />
            <span className="text-xs font-semibold text-amber-900 tracking-wide uppercase">Prémiový projekt</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-4 tracking-tight">
            Bytový dom RAJ
          </h1>
          <p className="text-lg text-stone-600 font-light">
            Bývanie v národnom parku Slovenský Raj
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-6">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={galleryImages[currentImageIndex]}
              alt="Bytový dom RAJ"
              className="w-full h-full object-cover"
            />

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`aspect-video overflow-hidden rounded-md cursor-pointer transition-all ${
                  idx === currentImageIndex
                    ? 'ring-4 ring-amber-600 shadow-lg'
                    : 'hover:ring-2 hover:ring-amber-400 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Náhľad ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
        >
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-light text-stone-900">O projekte</h2>
            </div>

            <p className="text-base text-stone-700 leading-relaxed">
              Predstavujeme vám <span className="font-medium text-stone-900">Bytový dom RAJ</span> – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj. Ide o miesto, kde sa spája komfort mestského bývania, kvalita a estetika s pokojom a čistotou prírody.
            </p>

            <p className="text-base text-stone-700 leading-relaxed">
              Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
            </p>

            <p className="text-base text-stone-700 leading-relaxed">
              Projekt pozostáva z 39 bytov s výmerami od 40 do 90 m², pričom 5 bytov je riešených ako mezonet – ideálne pre tých, ktorí hľadajú viac priestoru a nadčasový dizajn.
            </p>

            <p className="text-base text-stone-700 leading-relaxed">
              Byty v našom projekte sú navrhnuté s dôrazom na priestor a výhľad bez kompromisov. Zamilujte sa do nadčasového bývania, kde je svetlo a príroda súčasťou každého dňa.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
              <p className="text-base text-stone-700 leading-relaxed">
                Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie s nízkymi prevádzkovými nákladmi. Samozrejmosťou je pohodlné a bezpečné parkovanie a skladový priestor pre každý byt.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
              <TrendingUp className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-light text-stone-900">Kľúčové údaje</h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-600">Počet bytov</span>
                <span className="text-2xl font-light text-stone-900">39</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-600">Výmera bytov</span>
                <span className="text-2xl font-light text-stone-900">40 – 90 m²</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-600">Mezonety</span>
                <span className="text-2xl font-light text-stone-900">5 bytov</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-600">Dokončenie</span>
                <span className="text-2xl font-light text-amber-600">Apríl 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-7 h-7 text-amber-600" />
            <h2 className="text-2xl font-light text-stone-900">Lokalita</h2>
          </div>

          <h3 className="text-xl font-light text-stone-900 mb-8">
            Národný park Slovenský raj – domov v objatí prírody
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
            <div className="space-y-4">
              <p className="text-base text-stone-700 leading-relaxed">
                Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
              </p>
              <p className="text-base text-stone-700 leading-relaxed">
                Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
              </p>

              <div className="bg-stone-50 p-6 rounded-lg mt-6">
                <p className="text-xs font-semibold text-stone-500 mb-4 uppercase tracking-wider">V blízkosti</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">vstup do turistických trás Slovenského raja</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">reštaurácie, služby a občianska vybavenosť</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">dopravné spojenie do Popradu a Tatier</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <OsMap
                height={400}
                title="Bytový dom RAJ"
                showLinks={true}
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-6 rounded-lg text-center">
            <p className="text-base font-light italic">
              Tu máte čistý vzduch, pokoj a krásu prírody na dosah ruky.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-7 h-7 text-amber-600" />
            <h2 className="text-2xl font-light text-stone-900">Benefity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'výborná poloha a dostupnosť kompletných služieb',
              'komfortné a bezpečné parkovanie v uzavretom areáli',
              'bývanie vhodné pre všetkých, ktorí hľadajú prírodu v spojení s komfortom',
              'široká škála bytov od 2-izbových až po 4-izbové jednotky',
              'byty ukončené do stavu štandard s podlahovým kúrením',
              'každý byt disponuje vlastným úložným priestorom',
              'presvetlené byty s priestrannými terasami alebo balkónmi',
              'energetická efektívnosť a kvalitné materiály',
              'na skok od hôr a oddychu v prírode'
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-700 leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg shadow-2xl p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Calendar className="w-7 h-7 text-amber-500" />
            <h2 className="text-2xl font-light text-white">Harmonogram</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
            <div className="bg-stone-800/50 p-8 rounded-lg text-center border border-stone-700">
              <p className="text-xs font-semibold text-amber-500 mb-4 uppercase tracking-wider">Výstavba</p>
              <p className="text-5xl font-light text-white">2024</p>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-500 p-8 rounded-lg text-center shadow-xl">
              <p className="text-xs font-semibold text-white/90 mb-4 uppercase tracking-wider">Dokončenie výstavby</p>
              <p className="text-5xl font-light text-white mb-1">Apríl</p>
              <p className="text-xl font-light text-white/90">2026</p>
            </div>

            <div className="bg-stone-800/50 p-8 rounded-lg text-center border border-stone-700">
              <p className="text-xs font-semibold text-amber-500 mb-4 uppercase tracking-wider">Odovzdávanie bytov</p>
              <p className="text-5xl font-light text-white mb-1">Q2</p>
              <p className="text-xl font-light text-stone-400">2026</p>
            </div>
          </div>

          <div className="text-center bg-white rounded-lg px-10 py-6 max-w-3xl mx-auto">
            <p className="text-base font-light text-stone-900">
              Rezervácie bytov sú už spustené – zabezpečte si svoj nový domov v predstihu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

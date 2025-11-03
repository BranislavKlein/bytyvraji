import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const galleryImages = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="about" className="bg-white">
      <div className="relative h-screen overflow-hidden">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={galleryImages[currentImageIndex]}
            alt="Bytový dom RAJ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight"
            >
              Bytový dom RAJ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 font-light"
            >
              Národný park Slovenský Raj
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1 transition-all ${
                idx === currentImageIndex
                  ? 'w-8 bg-white'
                  : 'w-1 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
            <div className="md:col-span-2 space-y-8">
              <p className="text-2xl text-stone-800 leading-relaxed font-light">
                Predstavujeme vám Bytový dom RAJ – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed">
                Ide o miesto, kde sa spája komfort mestského bývania s pokojom a čistotou prírody. Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed">
                Projekt pozostáva z 39 bytov s výmerami od 40 do 90 m², pričom 5 bytov je riešených ako mezonet. Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-500 mb-2">Počet bytov</p>
                <p className="text-4xl font-light text-stone-900">39</p>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">Výmera</p>
                <p className="text-4xl font-light text-stone-900">40–90 m²</p>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">Mezonety</p>
                <p className="text-4xl font-light text-stone-900">5</p>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">Dokončenie</p>
                <p className="text-4xl font-light text-stone-900">2026</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-24">
            {galleryImages.slice(1, 5).map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
                onClick={() => setCurrentImageIndex(idx + 1)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-16 mb-24">
            <h2 className="text-3xl font-light text-stone-900 mb-12">Lokalita</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-lg text-stone-600 leading-relaxed">
                  Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
                </p>
              </div>

              <div className="space-y-4 text-stone-600">
                <p>— vstup do turistických trás Slovenského raja</p>
                <p>— reštaurácie, služby a občianska vybavenosť</p>
                <p>— dopravné spojenie do Popradu a Tatier</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-16 mb-24">
            <h2 className="text-3xl font-light text-stone-900 mb-12">Benefity</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-stone-600">
              <p>— výborná poloha a dostupnosť kompletných služieb</p>
              <p>— komfortné a bezpečné parkovanie v uzavretom areáli</p>
              <p>— bývanie v spojení s prírodou a komfortom</p>
              <p>— široká škála bytov od 2-izbových až po 4-izbové</p>
              <p>— byty ukončené do stavu štandard s podlahovým kúrením</p>
              <p>— každý byt disponuje vlastným úložným priestorom</p>
              <p>— presvetlené byty s terasami alebo balkónmi</p>
              <p>— energetická efektívnosť a kvalitné materiály</p>
              <p>— na skok od hôr a oddychu v prírode</p>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-16">
            <h2 className="text-3xl font-light text-stone-900 mb-12">Harmonogram</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="text-sm text-stone-500 mb-3">Výstavba</p>
                <p className="text-5xl font-light text-stone-900">2024</p>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Dokončenie výstavby</p>
                <p className="text-5xl font-light text-stone-900">04/2026</p>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Odovzdávanie bytov</p>
                <p className="text-5xl font-light text-stone-900">Q2 2026</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-stone-600">
                Rezervácie bytov sú už spustené
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

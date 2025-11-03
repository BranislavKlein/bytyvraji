import { MapPin, Calendar, CheckCircle2, Sparkles, Award, TrendingUp, Building2, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const galleryImages = imageNumbers.map((num) => `https://bytyvraji.sk/${num}e.jpg`);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(120 113 108) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative">
        <div className="relative h-[70vh] overflow-hidden">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={galleryImages[currentImageIndex]}
              alt="Bytový dom RAJ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-white"></div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-5xl px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-2xl opacity-40"></div>
                  <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-sm px-10 py-5 rounded-full shadow-2xl border border-white/50">
                    <Award className="w-7 h-7 text-amber-600" />
                    <span className="text-base font-bold text-stone-900 tracking-wider uppercase">Prémiový projekt</span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-6xl md:text-8xl font-extralight text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
              >
                Bytový dom <span className="font-light text-amber-400">RAJ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl md:text-3xl text-white font-light leading-relaxed drop-shadow-lg"
              >
                Bývanie v národnom parku Slovenský Raj
              </motion.p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? 'w-12 bg-amber-500'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="sticky top-8 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-20 w-1 bg-gradient-to-b from-amber-600 to-amber-400"></div>
                      <h2 className="text-4xl md:text-5xl font-extralight text-stone-900">O projekte</h2>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-sm shadow-xl border-l-4 border-amber-600"
                  >
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-amber-200">
                      <div className="p-3 bg-amber-600 rounded-full shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-light text-stone-900">Kľúčové údaje</h3>
                    </div>
                    <div className="space-y-5">
                      <div className="flex justify-between items-center py-4 border-b border-stone-200">
                        <span className="text-base text-stone-600">Počet bytov</span>
                        <span className="text-3xl font-extralight text-stone-900">39</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-stone-200">
                        <span className="text-base text-stone-600">Výmera bytov</span>
                        <span className="text-3xl font-extralight text-stone-900">40 – 90 m²</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-stone-200">
                        <span className="text-base text-stone-600">Mezonety</span>
                        <span className="text-3xl font-extralight text-stone-900">5 bytov</span>
                      </div>
                      <div className="flex justify-between items-center py-4">
                        <span className="text-base text-stone-600">Dokončenie</span>
                        <span className="text-3xl font-extralight text-amber-600">Apríl 2026</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {galleryImages.slice(1, 5).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square overflow-hidden rounded-sm shadow-lg cursor-pointer group"
                        onClick={() => setCurrentImageIndex(idx + 1)}
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <p className="text-xl md:text-2xl text-stone-700 leading-loose first-letter:text-8xl first-letter:font-light first-letter:text-amber-600 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.7]">
                    Predstavujeme vám <span className="font-semibold text-stone-900">Bytový dom RAJ</span> – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj. Ide o miesto, kde sa spája komfort mestského bývania, kvalita a estetika s pokojom a čistotou prírody.
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>

                  <p className="text-xl text-stone-700 leading-loose">
                    Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
                  </p>

                  <p className="text-xl text-stone-700 leading-loose">
                    Projekt pozostáva z <span className="font-semibold text-stone-900">39 bytov</span> s výmerami od <span className="font-semibold text-stone-900">40 do 90 m²</span>, pričom <span className="font-semibold text-stone-900">5 bytov je riešených ako mezonet</span> – ideálne pre tých, ktorí hľadajú viac priestoru a nadčasový dizajn.
                  </p>

                  <div className="bg-gradient-to-r from-amber-50 via-amber-50/50 to-transparent border-l-4 border-amber-600 pl-8 py-8 my-8">
                    <p className="text-xl text-stone-700 leading-loose italic">
                      Byty v našom projekte sú navrhnuté s dôrazom na priestor a výhľad bez kompromisov. Zamilujte sa do nadčasového bývania, kde je svetlo a príroda súčasťou každého dňa.
                    </p>
                  </div>

                  <p className="text-xl text-stone-700 leading-loose">
                    Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie s nízkymi prevádzkovými nákladmi. Samozrejmosťou je pohodlné a bezpečné parkovanie a skladový priestor pre každý byt.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-50 rounded-sm p-16 md:p-20 mb-24 shadow-xl"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="p-5 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-xl">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight text-stone-900">Lokalita</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-transparent mt-3"></div>
              </div>
            </div>

            <h3 className="text-3xl font-light text-stone-900 mb-12 max-w-3xl">
              Národný park Slovenský raj – domov v objatí prírody
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-8">
                <p className="text-xl text-stone-700 leading-loose">
                  Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
                </p>
                <p className="text-xl text-stone-700 leading-loose">
                  Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
                </p>
              </div>

              <div className="bg-white p-10 rounded-sm shadow-xl border-l-4 border-amber-600">
                <p className="text-sm font-bold text-amber-600 mb-8 uppercase tracking-widest flex items-center gap-3">
                  <TreePine className="w-5 h-5" />
                  V blízkosti
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-lg text-stone-700 leading-relaxed pt-1">vstup do turistických trás Slovenského raja</span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-lg text-stone-700 leading-relaxed pt-1">reštaurácie, služby a občianska vybavenosť</span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-lg text-stone-700 leading-relaxed pt-1">dopravné spojenie do Popradu a Tatier</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700"></div>
              <div className="relative text-white p-12 text-center">
                <p className="text-2xl md:text-3xl font-light italic leading-loose">
                  Tu máte čistý vzduch, pokoj a krásu prírody na dosah ruky.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center gap-6 mb-16">
              <div className="p-5 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-xl">
                <Sparkles className="w-9 h-9 text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight text-stone-900">Benefity</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-transparent mt-3"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="group bg-gradient-to-br from-white to-stone-50 p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200 hover:border-amber-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                    </div>
                    <p className="text-lg text-stone-700 leading-relaxed pt-1">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-sm p-16 md:p-20 shadow-2xl"
          >
            <div className="flex items-center gap-6 mb-16 justify-center">
              <div className="p-5 bg-amber-600 rounded-full shadow-xl">
                <Calendar className="w-9 h-9 text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-extralight text-white">Harmonogram</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-transparent mt-3 mx-auto"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-12 text-center rounded-sm border-2 border-stone-700 hover:border-amber-600 transition-colors shadow-xl"
              >
                <p className="text-xs font-bold text-amber-600 mb-6 uppercase tracking-widest">Výstavba</p>
                <p className="text-7xl font-extralight text-white">2024</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-sm shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-700"></div>
                <div className="relative p-12 text-center">
                  <p className="text-xs font-bold text-white mb-6 uppercase tracking-widest">Dokončenie výstavby</p>
                  <p className="text-7xl font-extralight text-white mb-2">Apríl</p>
                  <p className="text-3xl font-light text-white/90">2026</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-12 text-center rounded-sm border-2 border-stone-700 hover:border-amber-600 transition-colors shadow-xl"
              >
                <p className="text-xs font-bold text-amber-600 mb-6 uppercase tracking-widest">Odovzdávanie bytov</p>
                <p className="text-7xl font-extralight text-white mb-2">Q2</p>
                <p className="text-3xl font-light text-stone-400">2026</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-block bg-white rounded-sm px-12 py-10 shadow-2xl">
                <p className="text-2xl md:text-3xl font-light text-stone-900 leading-relaxed">
                  Rezervácie bytov sú už spustené – zabezpečte si svoj nový domov v predstihu.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

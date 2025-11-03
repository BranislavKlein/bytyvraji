import { MapPin, Home, Calendar, CheckCircle2, Sparkles, Mountain } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="about" className="bg-gradient-to-b from-stone-50 via-white to-stone-50">
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src="https://bytyvraji.sk/4e.jpg"
            alt="Bytový dom RAJ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80"></div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-center justify-center px-4"
        >
          <div className="text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight leading-tight">
                Bytový dom RAJ
              </h1>
              <div className="h-px w-32 bg-amber-600 mx-auto mb-8"></div>
              <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                Bývanie v národnom parku Slovenský Raj
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <Mountain className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>
      </div>

      <div className="relative -mt-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-2xl p-10 md:p-16 mb-24"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-stone-700 leading-loose mb-8 first-letter:text-6xl first-letter:font-light first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
                Predstavujeme vám Bytový dom RAJ – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj. Ide o miesto, kde sa spája komfort mestského bývania, kvalita a estetika s pokojom a čistotou prírody.
              </p>
              <p className="text-lg text-stone-600 leading-loose mb-6">
                Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
              </p>
              <p className="text-lg text-stone-600 leading-loose mb-6">
                Projekt pozostáva z <span className="font-medium text-stone-900">39 bytov</span> s výmerami od <span className="font-medium text-stone-900">40 do 90 m²</span>, pričom <span className="font-medium text-stone-900">5 bytov je riešených ako mezonet</span> – ideálne pre tých, ktorí hľadajú viac priestoru a nadčasový dizajn.
              </p>
              <p className="text-lg text-stone-600 leading-loose mb-6">
                Byty v našom projekte sú navrhnuté s dôrazom na priestor a výhľad bez kompromisov. Zamilujte sa do nadčasového bývania, kde je svetlo a príroda súčasťou každého dňa.
              </p>
              <p className="text-lg text-stone-600 leading-loose">
                Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie s nízkymi prevádzkovými nákladmi. Samozrejmosťou je pohodlné a bezpečné parkovanie a skladový priestor pre každý byt.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-amber-600 rounded-full">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-light text-stone-900">Lokalita</h2>
              </div>

              <h3 className="text-xl font-medium text-stone-900 mb-6">
                Národný park Slovenský raj – domov v objatí prírody
              </h3>

              <p className="text-stone-600 leading-relaxed mb-6">
                Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
              </p>

              <p className="text-stone-600 leading-relaxed mb-8">
                Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">vstup do turistických trás Slovenského raja</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">reštaurácie, služby a občianska vybavenosť</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">dopravné spojenie do Popradu a Tatier</span>
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed italic border-l-4 border-amber-600 pl-4">
                Tu máte čistý vzduch, pokoj a krásu prírody na dosah ruky.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-amber-600 to-amber-700 p-12 shadow-lg text-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/20 rounded-full">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-light">Benefity</h2>
              </div>

              <div className="space-y-5">
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <p className="text-white/95 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-900 p-12 md:p-16 mb-24"
          >
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="p-4 bg-amber-600 rounded-full">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white">Harmonogram</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center p-8 bg-stone-800 border border-stone-700"
              >
                <p className="text-sm font-medium text-amber-600 mb-3 uppercase tracking-wider">Výstavba</p>
                <p className="text-4xl font-light text-white">2024</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-8 bg-stone-800 border border-stone-700"
              >
                <p className="text-sm font-medium text-amber-600 mb-3 uppercase tracking-wider">Dokončenie výstavby</p>
                <p className="text-4xl font-light text-white">Apríl 2026</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-8 bg-stone-800 border border-stone-700"
              >
                <p className="text-sm font-medium text-amber-600 mb-3 uppercase tracking-wider">Odovzdávanie bytov</p>
                <p className="text-4xl font-light text-white">Q2 2026</p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white text-center mt-12 text-lg font-light"
            >
              Rezervácie bytov sú už spustené – zabezpečte si svoj nový domov v predstihu.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

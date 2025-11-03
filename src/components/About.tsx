import { MapPin, Calendar, CheckCircle2, Sparkles, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-amber-50 px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-900 tracking-wide uppercase">Prémiový projekt</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6 leading-tight tracking-tight">
            Bytový dom RAJ
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            Bývanie v národnom parku Slovenský Raj
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24 items-start"
        >
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden shadow-xl group"
              >
                <img
                  src="https://bytyvraji.sk/4e.jpg"
                  alt="Bytový dom RAJ"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-stone-50 p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                  <h3 className="text-lg font-medium text-stone-900">Kľúčové údaje</h3>
                </div>
                <div className="space-y-3 text-stone-700">
                  <div className="flex justify-between items-center py-2 border-b border-stone-200">
                    <span className="text-sm">Počet bytov</span>
                    <span className="font-medium">39</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-stone-200">
                    <span className="text-sm">Výmera bytov</span>
                    <span className="font-medium">40 – 90 m²</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-stone-200">
                    <span className="text-sm">Mezonety</span>
                    <span className="font-medium">5 bytov</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Dokončenie</span>
                    <span className="font-medium">Apríl 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-lg text-stone-700 leading-loose mb-6">
                Predstavujeme vám <span className="font-medium text-stone-900">Bytový dom RAJ</span> – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj. Ide o miesto, kde sa spája komfort mestského bývania, kvalita a estetika s pokojom a čistotou prírody.
              </p>
              <p className="text-lg text-stone-700 leading-loose mb-6">
                Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
              </p>
              <p className="text-lg text-stone-700 leading-loose mb-6">
                Projekt pozostáva z 39 bytov s výmerami od 40 do 90 m², pričom 5 bytov je riešených ako mezonet – ideálne pre tých, ktorí hľadajú viac priestoru a nadčasový dizajn.
              </p>
              <p className="text-lg text-stone-700 leading-loose mb-6">
                Byty v našom projekte sú navrhnuté s dôrazom na priestor a výhľad bez kompromisov. Zamilujte sa do nadčasového bývania, kde je svetlo a príroda súčasťou každého dňa.
              </p>
              <p className="text-lg text-stone-700 leading-loose">
                Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie s nízkymi prevádzkovými nákladmi. Samozrejmosťou je pohodlné a bezpečné parkovanie a skladový priestor pre každý byt.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-stone-50 p-12 md:p-16 mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-amber-600"></div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-7 h-7 text-amber-600" />
                <h2 className="text-3xl font-light text-stone-900">Lokalita</h2>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-light text-stone-900 mb-8">
            Národný park Slovenský raj – domov v objatí prírody
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-stone-700 leading-relaxed mb-6">
                Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-stone-500 mb-6 uppercase tracking-wider">V blízkosti</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">vstup do turistických trás Slovenského raja</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">reštaurácie, služby a občianska vybavenosť</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">dopravné spojenie do Popradu a Tatier</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-600 text-white p-6 mt-8">
            <p className="text-lg font-light italic text-center">
              Tu máte čistý vzduch, pokoj a krásu prírody na dosah ruky.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-amber-600"></div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-7 h-7 text-amber-600" />
                <h2 className="text-3xl font-light text-stone-900">Benefity</h2>
              </div>
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
                className="bg-stone-50 p-6 hover:bg-stone-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-stone-700 leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t-2 border-stone-200 pt-16"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 bg-amber-600"></div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-7 h-7 text-amber-600" />
                <h2 className="text-3xl font-light text-stone-900">Harmonogram</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-stone-50 p-10 text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-xs font-semibold text-amber-600 mb-4 uppercase tracking-widest">Výstavba</p>
              <p className="text-5xl font-extralight text-stone-900 mb-2">2024</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-amber-600 p-10 text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-xs font-semibold text-white/90 mb-4 uppercase tracking-widest">Dokončenie výstavby</p>
              <p className="text-5xl font-extralight text-white mb-2">Apríl</p>
              <p className="text-2xl font-light text-white/90">2026</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-stone-50 p-10 text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-xs font-semibold text-amber-600 mb-4 uppercase tracking-widest">Odovzdávanie bytov</p>
              <p className="text-5xl font-extralight text-stone-900 mb-2">Q2</p>
              <p className="text-2xl font-light text-stone-600">2026</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-stone-900 text-white p-10 text-center"
          >
            <p className="text-xl font-light leading-relaxed">
              Rezervácie bytov sú už spustené – zabezpečte si svoj nový domov v predstihu.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

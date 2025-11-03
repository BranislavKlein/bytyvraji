import { MapPin, Calendar, CheckCircle2, Sparkles, Award, TrendingUp, Building2, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(120 113 108) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-block mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-xl opacity-30"></div>
              <div className="relative flex items-center gap-4 bg-gradient-to-r from-amber-50 via-white to-amber-50 px-10 py-5 rounded-full shadow-lg border-2 border-amber-200">
                <Award className="w-7 h-7 text-amber-600" />
                <span className="text-base font-bold text-amber-900 tracking-wider uppercase">Prémiový projekt</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-extralight text-stone-900 mb-10 leading-tight tracking-tight"
          >
            Bytový dom <span className="relative inline-block">
              <span className="relative z-10 font-light bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">RAJ</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-amber-200 -z-0"
              ></motion.div>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-600 to-amber-600"></div>
            <div className="p-3 bg-gradient-to-br from-amber-50 to-white rounded-full shadow-md border border-amber-200">
              <TreePine className="w-6 h-6 text-amber-600" />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-amber-600 to-amber-600"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Bývanie v národnom parku <span className="font-medium text-stone-800">Slovenský Raj</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-32 items-start"
        >
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-sm shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="https://bytyvraji.sk/4e.jpg"
                  alt="Bytový dom RAJ"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white to-stone-50 p-10 rounded-sm shadow-xl border border-stone-200"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-amber-600">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-stone-900">Kľúčové údaje</h3>
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-4 border-b border-stone-200">
                    <span className="text-base text-stone-600">Počet bytov</span>
                    <span className="text-2xl font-light text-stone-900">39</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-stone-200">
                    <span className="text-base text-stone-600">Výmera bytov</span>
                    <span className="text-2xl font-light text-stone-900">40 – 90 m²</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-stone-200">
                    <span className="text-base text-stone-600">Mezonety</span>
                    <span className="text-2xl font-light text-stone-900">5 bytov</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-base text-stone-600">Dokončenie</span>
                    <span className="text-2xl font-light text-amber-600">Apríl 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-stone-700 leading-loose mb-8 first-letter:text-7xl first-letter:font-light first-letter:text-amber-600 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
                Predstavujeme vám <span className="font-semibold text-stone-900">Bytový dom RAJ</span> – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj. Ide o miesto, kde sa spája komfort mestského bývania, kvalita a estetika s pokojom a čistotou prírody.
              </p>
              <p className="text-xl text-stone-700 leading-loose mb-8">
                Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
              </p>
              <p className="text-xl text-stone-700 leading-loose mb-8">
                Projekt pozostáva z <span className="font-semibold text-stone-900">39 bytov</span> s výmerami od <span className="font-semibold text-stone-900">40 do 90 m²</span>, pričom <span className="font-semibold text-stone-900">5 bytov je riešených ako mezonet</span> – ideálne pre tých, ktorí hľadajú viac priestoru a nadčasový dizajn.
              </p>
              <p className="text-xl text-stone-700 leading-loose mb-8">
                Byty v našom projekte sú navrhnuté s dôrazom na priestor a výhľad bez kompromisov. Zamilujte sa do nadčasového bývania, kde je svetlo a príroda súčasťou každého dňa.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-amber-600 pl-8 py-6">
                <p className="text-xl text-stone-700 leading-loose">
                  Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie s nízkymi prevádzkovými nákladmi. Samozrejmosťou je pohodlné a bezpečné parkovanie a skladový priestor pre každý byt.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white to-stone-50 rounded-sm p-16 md:p-20 mb-32 shadow-2xl border border-stone-200"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-stone-900">Lokalita</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-transparent mt-2"></div>
            </div>
          </div>

          <h3 className="text-3xl font-light text-stone-900 mb-12">
            Národný park Slovenský raj – domov v objatí prírody
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
                Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
              </p>
            </div>

            <div className="bg-white p-10 rounded-sm shadow-xl border border-stone-200">
              <p className="text-sm font-bold text-amber-600 mb-8 uppercase tracking-widest">V blízkosti</p>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <span className="text-stone-700 leading-relaxed pt-1">vstup do turistických trás Slovenského raja</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <span className="text-stone-700 leading-relaxed pt-1">reštaurácie, služby a občianska vybavenosť</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <span className="text-stone-700 leading-relaxed pt-1">dopravné spojenie do Popradu a Tatier</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-95"></div>
            <div className="relative text-white p-10 text-center">
              <p className="text-2xl font-light italic leading-relaxed">
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
          className="mb-32"
        >
          <div className="flex items-center gap-6 mb-16">
            <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-stone-900">Benefity</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-transparent mt-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="p-2 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <p className="text-stone-700 leading-relaxed pt-1">{benefit}</p>
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
          className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-sm p-16 shadow-2xl"
        >
          <div className="flex items-center gap-6 mb-16 justify-center">
            <div className="p-4 bg-amber-600 rounded-full shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-white">Harmonogram</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-transparent mt-2"></div>
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
              <p className="text-6xl font-extralight text-white mb-2">2024</p>
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
                <p className="text-6xl font-extralight text-white mb-2">Apríl</p>
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
              <p className="text-6xl font-extralight text-white mb-2">Q2</p>
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
            <div className="inline-block bg-white rounded-sm px-12 py-8 shadow-2xl">
              <p className="text-2xl font-light text-stone-900 leading-relaxed">
                Rezervácie bytov sú už spustené – zabezpečte si svoj nový domov v predstihu.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

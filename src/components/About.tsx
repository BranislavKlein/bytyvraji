import { MapPin, Mountain, Home, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-8 leading-tight">
            Bytový dom RAJ – bývanie v národnom parku<br />Slovenský Raj
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <img
            src="https://bytyvraji.sk/4e.jpg"
            alt="Bytový dom RAJ"
            className="w-full h-[500px] object-cover shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-20"
        >
          <p className="text-stone-700 leading-relaxed mb-6">
            Predstavujeme vám Bytový dom RAJ – moderný rezidenčný projekt situovaný v jedinečnom prostredí národného parku Slovenský raj. Ide o miesto, kde sa spája komfort mestského bývania, kvalita a estetika s pokojom a čistotou prírody.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            Bytový dom RAJ sa nachádza v uzavretom areáli s dostatkom súkromia a zelene.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            Projekt pozostáva z 39 bytov s výmerami od 40 do 90 m², pričom 5 bytov je riešených ako mezonet – ideálne pre tých, ktorí hľadajú viac priestoru a nadčasový dizajn.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            Byty v našom projekte sú navrhnuté s dôrazom na priestor a výhľad bez kompromisov. Zamilujte sa do nadčasového bývania, kde je svetlo a príroda súčasťou každého dňa.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky úsporné bývanie s nízkymi prevádzkovými nákladmi. Samozrejmosťou je pohodlné a bezpečné parkovanie a skladový priestor pre každý byt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-t border-stone-200 pt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-stone-900" />
            <h2 className="text-3xl font-light text-stone-900">Lokalita</h2>
          </div>
          <h3 className="text-xl font-light text-stone-900 mb-6">
            Národný park Slovenský raj – domov v objatí prírody
          </h3>
          <p className="text-stone-700 leading-relaxed mb-6">
            Projekt sa nachádza v jedinečnom prostredí národného parku Slovenský raj, ktorý patrí medzi najkrajšie prírodné lokality Slovenska.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            Okolie ponúka široké možnosti pre turistiku, cykloturistiku, lyžovanie či relax v termálnych kúpeľoch.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4 font-medium">
            Blízko bytového domu sa nachádza:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3 text-stone-700">
              <CheckCircle2 className="w-5 h-5 text-stone-900 flex-shrink-0 mt-0.5" />
              <span>vstup do turistických trás Slovenského raja</span>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <CheckCircle2 className="w-5 h-5 text-stone-900 flex-shrink-0 mt-0.5" />
              <span>reštaurácie, služby a občianska vybavenosť</span>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <CheckCircle2 className="w-5 h-5 text-stone-900 flex-shrink-0 mt-0.5" />
              <span>dopravné spojenie do Popradu a Tatier</span>
            </li>
          </ul>
          <p className="text-stone-700 leading-relaxed italic">
            Tu máte čistý vzduch, pokoj a krásu prírody na dosah ruky.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-t border-stone-200 pt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-stone-900" />
            <h2 className="text-3xl font-light text-stone-900">Benefity</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              'výborná poloha a dostupnosť kompletných služieb',
              'komfortné a bezpečné parkovanie pri bytovom dome - v uzavretom areáli',
              'bývanie vhodné pre všetkých, ktorí hľadajú prírodu v spojení s komfortom mestského bývania',
              'široká škála bytov od útulných 2-izbových až po priestranné 4-izbové jednotky, byty s výmerou 40 – 90 m², 5 mezonetov',
              'byty ukončené do stavu štandard s podlahovým kúrením',
              'každý byt disponuje vlastným úložným priestorom',
              'presvetlené byty v kombinácií s moderným dizajnom, praktickými riešeniami a priestrannými terasami alebo balkónmi',
              'energetická efektívnosť a kvalitné materiály',
              'a hlavne na skok od hôr a oddychu v prírode'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-stone-900 flex-shrink-0 mt-0.5" />
                <p className="text-stone-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-stone-200 pt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-stone-900" />
            <h2 className="text-3xl font-light text-stone-900">Harmonogram</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-medium text-stone-500 mb-2">Výstavba</p>
              <p className="text-2xl font-light text-stone-900">2024</p>
            </div>
            <div>
              <p className="text-sm font-medium text-stone-500 mb-2">Dokončenie výstavby</p>
              <p className="text-2xl font-light text-stone-900">Apríl 2026</p>
            </div>
            <div>
              <p className="text-sm font-medium text-stone-500 mb-2">Odovzdávanie bytov</p>
              <p className="text-2xl font-light text-stone-900">2. štvrťrok 2026</p>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed mt-8 font-medium">
            Rezervácie bytov sú už spustené – zabezpečte si svoj nový domov v predstihu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

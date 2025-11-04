import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, MapPin, Calendar, Award, Building2, TreePine } from 'lucide-react';

export default function ProjectHighlights() {
  const highlights = [
    {
      icon: Home,
      value: '39',
      label: 'bytov',
      description: 'od 40 do 90 m²'
    },
    {
      icon: Building2,
      value: '5',
      label: 'mezonetov',
      description: 'priestranné bývanie'
    },
    {
      icon: Calendar,
      value: 'Apríl 2026',
      label: 'dokončenie',
      description: 'rezervácie spustené'
    },
    {
      icon: TreePine,
      value: 'Národný park',
      label: 'Slovenský Raj',
      description: 'unikátna lokalita'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 113 108) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 px-5 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-semibold text-amber-900 tracking-wide uppercase">Prémiový projekt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-tight">
            Bytový dom RAJ
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Moderný rezidenčný projekt v srdci národného parku Slovenský Raj
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-stone-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-amber-700" />
                  </div>

                  <div className="mb-2">
                    <div className="text-3xl font-light text-stone-900 mb-1">{item.value}</div>
                    <div className="text-sm font-medium text-stone-700 uppercase tracking-wider">{item.label}</div>
                  </div>

                  <div className="text-xs text-stone-500 leading-relaxed">{item.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-10 md:p-12 border border-stone-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-stone-900 mb-6">
                Bývanie, ktoré spája komfort s prírodou
              </h3>
              <p className="text-base text-stone-700 leading-relaxed mb-6">
                Bytový dom RAJ ponúka 39 moderných bytov v uzavretom areáli s dostatkom súkromia a zelene.
                Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky
                úsporné bývanie s nízkymi prevádzkovými nákladmi.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-sm text-stone-600">Podlahové kúrenie a príprava na klimatizáciu</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-sm text-stone-600">Veľkoformátové okná pre maximum denného svetla</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-sm text-stone-600">Vlastné terasy/balkóny a parkovacie miesta</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-sm text-stone-600">Elektronická brána a kamerový systém</p>
                </div>
              </div>

              <Link
                to="/o-projekte"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Viac o projekte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-stone-200 rounded-full blur-3xl opacity-20"></div>

              <div className="relative grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-8 text-white shadow-lg">
                  <div className="text-5xl font-light mb-3">40–90</div>
                  <div className="text-sm opacity-90 mb-1">m²</div>
                  <div className="text-xs opacity-75">Výmera bytov</div>
                </div>

                <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl p-8 text-white shadow-lg">
                  <div className="text-5xl font-light mb-3">A+</div>
                  <div className="text-sm opacity-90 mb-1">trieda</div>
                  <div className="text-xs opacity-75">Energetická</div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-8 shadow-md">
                  <div className="text-5xl font-light text-amber-600 mb-3">65</div>
                  <div className="text-sm text-stone-700 mb-1">parkovacích</div>
                  <div className="text-xs text-stone-500">miest v areáli</div>
                </div>

                <div className="bg-white border-2 border-stone-200 rounded-xl p-8 shadow-md">
                  <div className="text-5xl font-light text-stone-800 mb-3">3</div>
                  <div className="text-sm text-stone-700 mb-1">poschodia</div>
                  <div className="text-xs text-stone-500">celkovo</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-10 md:p-12 text-center shadow-2xl"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-amber-500" />
            <h3 className="text-3xl font-light text-white">Pozrite si dispozície bytov</h3>
          </div>

          <p className="text-stone-300 text-base mb-8 max-w-3xl mx-auto leading-relaxed">
            Vyberte si z širokej ponuky 2-izbových až 4-izbových bytov vrátane priestranných mezonetov.
            Každý byt s vlastnou terasou alebo balkónom, úložným priestorom a vyhradenými parkovacími miestami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/ponuka"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Zobraziť ponuku bytov
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/podorysy"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105"
            >
              Pôdorysy a ceny
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

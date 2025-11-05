import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ProjectHighlights() {

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-stone-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-light text-stone-900 mb-4 sm:mb-6">
                Bývanie, ktoré spája komfort s prírodou
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4 sm:mb-6">
                Bytový dom RAJ ponúka 39 moderných bytov v uzavretom areáli s dostatkom súkromia a zelene.
                Každý byt je premyslený do detailov tak, aby poskytoval svetlé, priestranné a energeticky
                úsporné bývanie s nízkymi prevádzkovými nákladmi.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-stone-600">39 bytov</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-stone-600">Podlahové kúrenie a príprava na klimatizáciu</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-stone-600">Veľkoformátové okná pre maximum denného svetla</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-stone-600">Vlastné terasy/balkóny a parkovacie miesta</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-stone-600">Elektronická brána a kamerový systém</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-stone-600">Vlastný sklad ku každému bytu</p>
                </div>
              </div>

              <Link
                to="/o-projekte"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-lg transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Viac o projekte
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-48 sm:h-48 bg-stone-200 rounded-full blur-3xl opacity-20"></div>

              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2 sm:mb-3">40–90</div>
                  <div className="text-xs sm:text-sm opacity-90 mb-0.5 sm:mb-1">m²</div>
                  <div className="text-[10px] sm:text-xs opacity-75">Výmera bytov</div>
                </div>

                <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2 sm:mb-3">39</div>
                  <div className="text-xs sm:text-sm opacity-90 mb-0.5 sm:mb-1">bytov</div>
                  <div className="text-[10px] sm:text-xs opacity-75">v projekte</div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-md">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-amber-600 mb-2 sm:mb-3">65</div>
                  <div className="text-xs sm:text-sm text-stone-700 mb-0.5 sm:mb-1">parkovacích</div>
                  <div className="text-[10px] sm:text-xs text-stone-500">miest v areáli</div>
                </div>

                <div className="bg-white border-2 border-stone-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-md">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-2 sm:mb-3">3</div>
                  <div className="text-xs sm:text-sm text-stone-700 mb-0.5 sm:mb-1">poschodia</div>
                  <div className="text-[10px] sm:text-xs text-stone-500">celkovo</div>
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
          className="mt-8 sm:mt-10 lg:mt-12 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 text-center shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-amber-500" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">Pozrite si dispozície bytov</h3>
          </div>

          <p className="text-stone-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Vyberte si z širokej ponuky 2-izbových až 4-izbových bytov vrátane priestranných mezonetov.
            Každý byt s vlastnou terasou alebo balkónom, úložným priestorom a vyhradenými parkovacími miestami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/ponuka"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Zobraziť ponuku bytov
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <Link
              to="/podorysy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg transition-all hover:scale-105"
            >
              Pôdorysy a ceny
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

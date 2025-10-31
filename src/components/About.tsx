import { MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-light text-center text-stone-800 mb-6 tracking-wide">O projekte</h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12"></div>
        <p className="text-center text-stone-600 mb-16 text-lg max-w-3xl mx-auto font-light">
          BYTY V RAJI predstavuje modernú architektúru spojenú s komfortom a kvalitou bývania
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Building"
              className="w-full h-96 object-cover border border-stone-200"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-light text-stone-900 mb-2">Lokácia</h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Výnimočná poloha v atraktívnej lokalite s kompletnou občianskou vybavenosťou.
                  V blízkosti nájdete školy, škôlky, obchody, reštaurácie a výborné dopravné spojenie.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-light text-stone-900 mb-2">Termín dokončenia</h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Plánované dokončenie projektu je v priebehu roka 2025.
                  Výstavba prebieha podľa harmonogramu s najvyšším dôrazom na kvalitu.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-light text-stone-900 mb-2">Kvalita</h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Využitie moderných materiálov a technológií zabezpečuje vysoký štandard bývania
                  s dôrazom na energetickú úspornosť a ekológiu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 p-8 md:p-12">
          <h3 className="text-2xl font-light text-stone-900 mb-6">Výhody projektu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Moderná architektúra a dizajn</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Podzemné parkovanie</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Kvalitné materiály a vybavenie</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Energeticky úsporné riešenia</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Balkóny a terasy s výhľadom</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Bezpečnostný systém</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Výťah vo všetkých poschodiach</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-stone-700 font-light">Úložné priestory</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

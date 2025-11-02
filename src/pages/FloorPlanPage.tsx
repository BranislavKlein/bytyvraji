import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FloorPlan from "../components/FloorPlan";
import FloorMap1NP from "../components/FloorMap1NP";
import FloorMap2NP from "../components/FloorMap2NP";
import FloorMap3NP from "../components/FloorMap3NP";
import { supabase } from "../lib/supabase";

interface Apartment {
  id: string;
  apartment_number: string;
  floor: number;
  rooms: number;
  area_sqm: number;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  balcony: boolean;
  terrace: boolean;
}

export default function FloorPlanPage() {
  const [activeFloor, setActiveFloor] = useState<1 | 2 | 3>(3);
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const { data, error } = await supabase
        .from('apartments')
        .select('*')
        .order('floor', { ascending: true })
        .order('apartment_number', { ascending: true });

      if (error) throw error;
      setApartments(data || []);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredApartments = apartments.filter(apt => apt.floor === activeFloor);

  const floorLabel: Record<number, string> = {
    1: "1. Prízemné podlažie",
    2: "2. Poschodie",
    3: "3. Poschodie",
  };

  const floorTitle: Record<number, string> = {
    1: "Prízemie",
    2: "Stredné poschodie",
    3: "Vrchné Poschodie",
  };

  const floorDesc: Record<number, string> = {
    1: "Byty, Vstup, Parkovacie miesta, technická miestnosť, Sklad, byty s vstupom na záhradu.",
    2: "Byty (3 izbové ...), 5x mezonet, každý byt má balkón.",
    3: "Byty, každý byt má balkón.",
  };

  const renderFloorMap = (floor: number) => {
    if (floor === 1) return <FloorMap1NP />;
    if (floor === 2) return <FloorMap2NP />;
    return <FloorMap3NP />;
  };

  return (
    <div
      className="min-h-screen pt-20"
      style={{
        background:
          "linear-gradient(180deg, #fffaf5 0%, #fdf7f1 50%, #f8f7f6 100%)",
      }}
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* HEADER */}
        <header className="text-center space-y-6">
          <div className="inline-flex items-center rounded-full bg-amber-100/70 text-amber-700 text-[11px] font-medium px-3 py-1 border border-amber-200 shadow-[0_8px_24px_rgba(251,146,60,0.15)]">
            Pôdorysy rodinného domu
          </div>

          <div>
            <h1 className="text-5xl font-light text-stone-800 mb-4 tracking-wide">
              Dispozícia podlaží
            </h1>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-center text-stone-600 text-lg max-w-3xl mx-auto font-light">
              Vyberte poschodie, prezrite si pôdorys a rozmery miestností.
            </p>
          </div>
        </header>

        {/* MAIN CARD (PURE WHITE) */}
        <section className="relative rounded-xl border border-amber-200 bg-white shadow-xl shadow-amber-100 overflow-hidden">
          <div className="relative z-10 p-6 md:p-10 space-y-10">
            {/* Floor selector */}
            <div className="flex flex-col items-center gap-6 text-center">
              {/* White selector bar */}
              <div className="bg-white border border-amber-200 shadow-md rounded-full p-1 flex flex-wrap justify-center gap-1">
                {[1, 2, 3].map((floor) => {
                  const isActive = activeFloor === floor;
                  return (
                    <button
                      key={floor}
                      onClick={() => setActiveFloor(floor as 1 | 2 | 3)}
                      className={[
                        "relative px-5 py-3 rounded-full text-sm font-medium leading-tight min-w-[8rem] transition-all outline-none",
                        "focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        isActive
                          ? "bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 text-white shadow-xl shadow-amber-500/40 ring-1 ring-amber-600/70"
                          : "text-stone-700 hover:bg-amber-50 active:bg-amber-100",
                      ].join(" ")}
                    >
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[15px] font-semibold">
                          {floorLabel[floor]}
                        </span>
                        <span
                          className={
                            "text-[10px] mt-0.5 " +
                            (isActive ? "text-amber-100" : "text-stone-500")
                          }
                        >
                          {floor === 1
                            ? "Prvé"
                            : floor === 2
                            ? "Druhé"
                            : "Tretie"}
                        </span>
                      </div>

                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-amber-500 shadow-[0_8px_16px_rgba(251,146,60,0.6)]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Info below buttons */}
              <div className="max-w-2xl">
                <div className="text-xl font-light text-stone-900 flex flex-wrap items-center justify-center gap-2">
                  <span className="font-medium">{floorLabel[activeFloor]}</span>

                  <span className="text-amber-600 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 shadow-[0_10px_20px_rgba(251,146,60,0.18)]">
                    {floorTitle[activeFloor]}
                  </span>
                </div>

                <div className="text-stone-600 font-light text-base mt-3 leading-relaxed">
                  {floorDesc[activeFloor]}
                </div>
              </div>
            </div>

            {/* Animated Floor Map */}
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFloor}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="bg-white border border-amber-200 rounded-xl p-4 md:p-8 shadow-lg shadow-amber-100"
                >
                  {renderFloorMap(activeFloor)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* FULL PLAN */}
        <section className="bg-white border border-amber-200 rounded-xl shadow-lg shadow-amber-100 p-6 md:p-10">
          <h2 className="text-2xl font-light text-stone-900 mb-6 flex flex-wrap items-center gap-3">
            <span className="font-medium text-stone-900">
              Pôdorys celého domu
            </span>
            <span className="text-[11px] font-medium text-amber-600 bg-amber-50 rounded-full border border-amber-200 px-2 py-[2px] shadow-[0_10px_20px_rgba(251,146,60,0.25)]">
              prehľad
            </span>
          </h2>

          <p className="text-stone-600 font-light text-base mb-8 max-w-prose leading-relaxed">
            Kompletný pôdorys všetkých podlaží pre lepšiu predstavu o dispozícii,
            veľkostiach miestností a orientácii domu.
          </p>

          <div className="rounded-lg border border-amber-200 bg-white p-4 md:p-8 shadow-inner shadow-amber-100">
            <FloorPlan />
          </div>
        </section>

        {/* APARTMENTS TABLE */}
        <section className="bg-gradient-to-br from-white via-amber-50/20 to-white border border-amber-200 rounded-2xl shadow-2xl shadow-amber-500/10 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1">
                  Dostupnosť bytov
                </h2>
                <p className="text-amber-100 text-sm font-light">
                  Aktuálny prehľad všetkých bytov na {activeFloor}. poschodí
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <span className="text-white text-sm font-medium">
                  {filteredApartments.length} bytov
                </span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-200 border-t-amber-600"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-amber-300/50">
                      <th className="text-left py-5 px-6 text-xs font-bold text-stone-600 uppercase tracking-wider">
                        Byt č.
                      </th>
                      <th className="text-left py-5 px-6 text-xs font-bold text-stone-600 uppercase tracking-wider">
                        Poschodie
                      </th>
                      <th className="text-left py-5 px-6 text-xs font-bold text-stone-600 uppercase tracking-wider">
                        Výmera
                      </th>
                      <th className="text-left py-5 px-6 text-xs font-bold text-stone-600 uppercase tracking-wider">
                        Cena
                      </th>
                      <th className="text-center py-5 px-6 text-xs font-bold text-stone-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredApartments.map((apt, index) => {
                      const statusConfig = {
                        available: {
                          bg: 'bg-emerald-50',
                          text: 'text-emerald-700',
                          border: 'border-emerald-200',
                          label: 'Dostupný',
                          dot: 'bg-emerald-500',
                        },
                        reserved: {
                          bg: 'bg-amber-50',
                          text: 'text-amber-700',
                          border: 'border-amber-200',
                          label: 'Rezervovaný',
                          dot: 'bg-amber-500',
                        },
                        sold: {
                          bg: 'bg-stone-100',
                          text: 'text-stone-600',
                          border: 'border-stone-300',
                          label: 'Predaný',
                          dot: 'bg-stone-500',
                        },
                      };

                      const config = statusConfig[apt.status];

                      return (
                        <motion.tr
                          key={apt.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group hover:bg-amber-50/50 transition-all duration-200"
                        >
                          <td className="py-5 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-500/30">
                                {apt.apartment_number}
                              </div>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <span className="text-stone-700 font-medium">
                              {apt.floor}NP
                            </span>
                          </td>
                          <td className="py-5 px-6">
                            <div className="flex flex-col">
                              <span className="text-stone-800 font-semibold">
                                {apt.area_sqm} m²
                              </span>
                              <span className="text-xs text-stone-500 mt-0.5">
                                {apt.rooms} {apt.rooms === 1 ? 'izba' : apt.rooms < 5 ? 'izby' : 'izieb'}
                              </span>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <div className="flex flex-col">
                              <span className="text-lg font-bold text-stone-900">
                                {new Intl.NumberFormat('sk-SK').format(apt.price)} €
                              </span>
                              <span className="text-xs text-stone-500 mt-0.5">
                                {Math.round(apt.price / apt.area_sqm)} €/m²
                              </span>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <div className="flex justify-center">
                              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold ${config.bg} ${config.text} border ${config.border} shadow-sm`}>
                                <span className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`}></span>
                                {config.label}
                              </span>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-stone-200 bg-gradient-to-r from-amber-50/50 to-transparent rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div>
                  <p className="text-stone-800 font-medium mb-1">
                    Máte záujem o konkrétny byt?
                  </p>
                  <p className="text-sm text-stone-600 font-light">
                    Kontaktujte nás pre viac informácií, podrobné pôdorysy a termín obhliadky.
                  </p>
                </div>
                <div className="flex gap-2 items-center text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Voľné</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Rezervované</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-stone-500"></span>
                    <span>Predané</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}

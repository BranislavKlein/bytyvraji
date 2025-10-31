import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FloorPlan from "../components/FloorPlan";
import FloorMap1NP from "../components/FloorMap1NP";
import FloorMap2NP from "../components/FloorMap2NP";
import FloorMap3NP from "../components/FloorMap3NP";
import Offer from "../components/Offer";

export default function FloorPlanPage() {
  const [activeFloor, setActiveFloor] = useState<1 | 2 | 3>(3);

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

        {/* CTA / Offer */}
        <section className="rounded-xl border border-amber-300/70 bg-gradient-to-br from-amber-500 via-amber-600 to-stone-900 text-white shadow-xl shadow-amber-500/30 overflow-hidden">
          <div className="p-6 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="text-xs uppercase tracking-[0.08em] text-amber-100 font-medium bg-amber-500/30 border border-amber-200/30 rounded-full inline-block px-3 py-1 shadow-[0_12px_30px_rgba(255,255,255,0.15)]">
                Dostupnosť & Cena
              </div>

              <div className="text-2xl font-semibold leading-tight text-white">
                Máte záujem o konkrétny byt?
              </div>

              <div className="text-base text-amber-50/90 font-light leading-relaxed">
                Pozrite si aktuálnu ponuku, pôdorysy a ceny. Radi vám pošleme
                pôdorys vo vysokom rozlíšení alebo pripravíme osobnú obhliadku.
              </div>
            </div>

            <div className="shrink-0 w-full max-w-[260px] bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <Offer />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

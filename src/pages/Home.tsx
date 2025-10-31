"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, FileText, Building2, CheckCircle2, Key } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


/* ----------------------- Helpers pre animácie bez knižníc ----------------------- */
// Count-up (plynulé naskakovanie čísla)
function useCountUp(end: number, { duration = 1.6 } = {}) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const rafRef = useRef<number | null>(null);

  const start = () => {
    if (started.current) return;
    started.current = true;
    const startTs = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - startTs) / 1000;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { value, start, started } as const;
}

// Detekcia, kedy je prvok v zobrazení (spustí count-up)
function useInView<T extends Element>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // stačí raz
        }
      },
      { root: null, threshold: 0.3, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);
  return inView;
}

/* ----------------------- Dáta pre štatistiky ----------------------- */
const stats = [
  { value: 39, label: "bytov", numberGradient: "from-amber-600 to-amber-800" },
  { value: 65, label: "parkovacích miest", numberGradient: "from-stone-600 to-stone-800" },
  { value: 8, label: "mezonety", numberGradient: "from-amber-600 to-amber-800" },
] as const;

/* ----------------------- Komponent karty štatistiky ----------------------- */
function StatCard({ value, label, numberGradient }: { value: number; label: string; numberGradient: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const { value: current, start, started } = useCountUp(value, { duration: 1.8 });

  useEffect(() => {
    if (inView && !started.current) start();
  }, [inView, start, started]);

  return (
    <div
      ref={ref}
      className="group relative isolate text-center p-12 rounded-2xl bg-white border border-stone-200/70 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* jemný shine pri hovere */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(120px 60px at 10% 10%, rgba(255,255,255,0.7), rgba(255,255,255,0) 70%), radial-gradient(120px 60px at 90% 90%, rgba(255,255,255,0.6), rgba(255,255,255,0) 70%)",
        }}
      />
      {/* jemný farebný halo pri hovere */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(120deg, rgba(245, 158, 11, .18), rgba(120, 113, 108, .14))",
          filter: "blur(18px)",
        }}
      />

      <div className="relative inline-block">
        <span
          className={`block text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${numberGradient}`}
        >
          {current.toLocaleString("sk-SK")}
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-stone-200 via-amber-300 to-stone-200 group-hover:w-24 transition-all duration-300" />
      </div>

      <div className="mt-6 text-sm uppercase tracking-[0.2em] text-stone-600 font-medium">{label}</div>
    </div>
  );
}

/* ----------------------- HLAVNÝ KOMPONENT STRÁNKY ----------------------- */
export default function Home() {
  const timelineSteps = [
    { id: 1, date: "09/2019", title: "Začiatok projektu", icon: Compass, status: "completed" },
    { id: 2, date: "05/2025", title: "Stavebné povolenie", icon: FileText, status: "completed" },
    { id: 3, date: "09/2025", title: "Výstavba a predaj bytov", icon: Building2, status: "active" },
    { id: 4, date: "05/2026", title: "Dokončenie stavby", icon: CheckCircle2, status: "upcoming" },
    { id: 5, date: "10/2026", title: "Kolaudácia", icon: Key, status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      
      
      
      {/* HERO */}
    <section className="relative h-screen flex items-center overflow-hidden font-['Outfit'] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url(https://bytyvraji.sk/4e.jpg)",
        }}
      >
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-center md:justify-start">
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-300">
              Byty v&nbsp;Raji
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-light uppercase tracking-[0.25em] text-white/80 mb-10">
            Bytový dom
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 mx-auto md:mx-0 bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-3 rounded-full font-medium tracking-wide text-white transition-all border border-white/30"
          >
            Viac informácií
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>




    

      {/* ŠTATISTIKY – nahradené za animované karty */}
      <section className="relative py-24 bg-stone-100 overflow-hidden">
        {/* ambientné pozadie len pre túto sekciu */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-stone-300/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ČASOVÁ OS */}
      <section className="py-32 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-light text-center text-white mb-6 tracking-wide">ČASOVÁ OS</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-20"></div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-stone-600 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";

                return (
                  <div key={step.id} className="relative flex flex-col items-center">
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                          isCompleted
                            ? "bg-amber-600 shadow-lg shadow-amber-600/30"
                            : isActive
                            ? "bg-amber-600 shadow-xl shadow-amber-600/40 scale-110"
                            : "bg-stone-300"
                        }`}
                      >
                        <Icon className={`w-12 h-12 ${isCompleted || isActive ? "text-white" : "text-stone-500"}`} />
                      </div>
                      <div
                        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          isCompleted || isActive ? "bg-stone-800 text-white" : "bg-stone-400 text-stone-700"
                        }`}
                      >
                        {step.id}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-sm text-stone-400 font-light mb-3 tracking-wider">{step.date}</div>
                      <h3
                        className={`text-base font-medium ${
                          isCompleted || isActive ? "text-white" : "text-stone-500"
                        } leading-tight`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {index < timelineSteps.length - 1 && <div className="lg:hidden w-0.5 h-12 bg-stone-600 mt-6"></div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INFO BLOK */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light text-stone-800 mb-6 tracking-wide">Moderné bývanie v Slovenskom Raji</h2>
              <div className="h-1 w-24 bg-amber-600 mb-8"></div>

              {/* Aktualizovaný text podľa zadania */}
              <p className="text-lg text-stone-600 leading-relaxed mb-6 font-light">
                Bytový dom <span className="font-medium text-stone-800">RAJ</span> ponúka 39 bytov s rozlohou od 35 do 90&nbsp;m²,
                každý s vlastnou terasou alebo balkónom, pivničnou kobkou a vyhradeným parkovacím miestom. To všetko
                v uzavretom areáli, ktorý poskytuje súkromie, bezpečnosť a pohodlie.
              </p>

              {/* "Niečo naviac" – stručný výber benefitov */}
              <ul className="space-y-3 mb-8">
                {[
                  "Podlahové vykurovanie a príprava na chladenie",
                  "Veľkoformátové okná pre maximum denného svetla",
                  
                  "Elektronická brána a kamerový systém v areáli",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-white shadow-sm transition hover:bg-amber-700"
                >
                  Mám záujem
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#ponuka"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-stone-800 hover:border-amber-600"
                >
                  Pozrieť ponuku bytov
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 border border-stone-300 hover:border-amber-600 transition-colors">
                <div className="text-4xl font-light text-amber-600 mb-3">A+</div>
                <div className="text-sm text-stone-700 font-light">Energetická trieda</div>
              </div>
              <div className="bg-white p-8 border border-stone-300 hover:border-amber-600 transition-colors">
                <div className="text-4xl font-light text-amber-600 mb-3">3</div>
                <div className="text-sm text-stone-700 font-light">Poschodia</div>
              </div>
              <div className="bg-white p-8 border border-stone-300 hover:border-amber-600 transition-colors">
                <div className="text-4xl font-light text-amber-600 mb-3">2026</div>
                <div className="text-sm text-stone-700 font-light">Rok dokončenia</div>
              </div>
              <div className="bg-white p-8 border border-stone-300 hover:border-amber-600 transition-colors">
                <div className="text-4xl font-light text-amber-600 mb-3">100%</div>
                <div className="text-sm text-stone-700 font-light">Kvalita</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

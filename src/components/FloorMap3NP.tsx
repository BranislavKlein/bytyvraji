import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function FloorMap3NP() {
  // rozmery pôvodného plánu 3NP.png (tvoj <img> map coords vychádzajú z tohto rastra)
  const IMG_WIDTH = 1298;
  const IMG_HEIGHT = 807; // ak má 3NP.png inú výšku, daj ju sem presne

  // ak potrebuješ jemne posunúť zóny oproti obrázku,
  // vieš to doladiť cez SCALE_X/Y a OFFSET_X/Y
  const SCALE_X = 1.0;
  const SCALE_Y = 1.0;
  const OFFSET_X = 0;
  const OFFSET_Y = 0;

  // Toto je mapping tvojich <area> -> náš interný formát
  // Dôležité: status / area / price / link sú teraz placeholdery.
  // Kľudne ich prepíš podľa bytov 23–39.
  const APARTMENTS = [
    {
      id: "23",
      shape: "rect",
      coords: [105, 51, 227, 313],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/23",
    },
    {
      id: "24",
      shape: "rect",
      coords: [235, 50, 359, 313],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/24",
    },
    {
      id: "25",
      shape: "rect",
      coords: [368, 50, 491, 314],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/25",
    },
    {
      id: "26",
      shape: "rect",
      coords: [498, 50, 624, 316],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/26",
    },
    {
      id: "27",
      shape: "rect",
      coords: [632, 52, 754, 314],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/27",
    },
    {
      id: "28",
      shape: "rect",
      coords: [761, 52, 885, 315],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/28",
    },
    {
      id: "29",
      shape: "rect",
      coords: [895, 51, 1014, 247],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/29",
    },
    {
      id: "30",
      shape: "poly",
      coords: [
        1037, 19,
        1237, 21,
        1240, 90,
        1127, 91,
        1127, 140,
        1037, 141,
      ],
      status: "Voľný",
      area: "2i • 54 m²",
      price: "—",
      link: "/byt/30",
    },
    {
      id: "31",
      shape: "poly",
      coords: [
        1074, 145,
        1131, 144,
        1133, 96,
        1238, 98,
        1238, 263,
        1077, 263,
      ],
      status: "Voľný",
      area: "2i • 54 m²",
      price: "—",
      link: "/byt/31",
    },
    {
      id: "32",
      shape: "poly",
      coords: [
        1074, 269,
        1238, 270,
        1237, 465,
        1142, 467,
        1142, 398,
        1074, 398,
      ],
      status: "Voľný",
      area: "2i • 54 m²",
      price: "—",
      link: "/byt/32",
    },
    {
      id: "33",
      shape: "poly",
      coords: [
        1037, 358,
        1069, 361,
        1067, 405,
        1138, 405,
        1138, 475,
        1237, 473,
        1238, 580,
        1038, 579,
      ],
      status: "Voľný",
      area: "3i • 75 m²",
      price: "—",
      link: "/byt/33",
    },
    {
      id: "34",
      shape: "rect",
      coords: [891, 359, 1014, 579],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/34",
    },
    {
      id: "35",
      shape: "rect",
      coords: [760, 359, 885, 579],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/35",
    },
    {
      id: "36",
      shape: "rect",
      coords: [497, 359, 630, 579],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/36",
    },
    {
      id: "37",
      shape: "rect",
      coords: [366, 358, 491, 579],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/37",
    },
    {
      id: "38",
      shape: "rect",
      coords: [235, 361, 361, 579],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/38",
    },
    {
      id: "39",
      shape: "rect",
      coords: [105, 361, 227, 579],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/39",
    },
  ];

  // ----------------------
  // farby podľa statusu
  // ----------------------
  function getColorsForStatus(status: string, hovered: boolean) {
    if (status === "Predaný") {
      return {
        fill: hovered
          ? "rgba(239, 68, 68, 0.55)"
          : "rgba(239, 68, 68, 0.35)",
        stroke: hovered
          ? "rgba(185, 28, 28, 0.9)"
          : "rgba(185, 28, 28, 0.6)",
      };
    }

    if (status === "Rezervovaný") {
      return {
        fill: hovered
          ? "rgba(234, 179, 8, 0.55)"
          : "rgba(234, 179, 8, 0.35)",
        stroke: hovered
          ? "rgba(161, 98, 7, 0.9)"
          : "rgba(161, 98, 7, 0.6)",
      };
    }

    // default: Voľný
    return {
      fill: hovered
        ? "rgba(16, 185, 129, 0.55)"
        : "rgba(16, 185, 129, 0.35)",
      stroke: hovered
        ? "rgba(6, 95, 70, 0.9)"
        : "rgba(6, 95, 70, 0.6)",
    };
  }

  // --- helpery na geometriu ---
  function adjustCoordArray(coords: number[]): number[] {
    const out: number[] = [];
    for (let i = 0; i < coords.length; i += 2) {
      const origX = coords[i];
      const origY = coords[i + 1];
      const newX = origX * SCALE_X + OFFSET_X;
      const newY = origY * SCALE_Y + OFFSET_Y;
      out.push(newX, newY);
    }
    return out;
  }

  function getRectFromCoords(adjusted: number[]) {
    const [x1, y1, x2, y2] = adjusted;
    const x = x1;
    const y = y1;
    const w = x2 - x1;
    const h = y2 - y1;
    return { x, y, w, h };
  }

  // --- state ---
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    apt: any | null;
  }>({
    show: false,
    x: 0,
    y: 0,
    apt: null,
  });

  function handleEnter(
    e: React.MouseEvent<SVGElement | SVGRectElement | SVGPolygonElement, MouseEvent>,
    apt: any
  ) {
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setHovered(apt.id);
    setTooltip({
      show: true,
      x: rect.left + rect.width / 2,
      y: rect.top,
      apt,
    });
  }

  function handleMove(
    e: React.MouseEvent<SVGElement | SVGRectElement | SVGPolygonElement, MouseEvent>
  ) {
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setTooltip((t) => ({
      ...t,
      x: rect.left + rect.width / 2,
      y: rect.top,
    }));
  }

  function handleLeave() {
    setHovered(null);
    setTooltip({
      show: false,
      x: 0,
      y: 0,
      apt: null,
    });
  }

  function handleClick(apt: any) {
    if (apt.link) {
      window.location.href = apt.link;
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* hlavička + legenda */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 w-full max-w-[1100px]">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            3. NP – Pôdorys
          </h2>
          <p className="text-sm text-slate-500">
            Klikni na byt pre detail
          </p>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <LegendDot color="bg-emerald-500" label="Voľný" />
          <LegendDot color="bg-yellow-500" label="Rezervovaný" />
          <LegendDot color="bg-red-500" label="Predaný" />
        </div>
      </div>

      {/* wrapper so zachovaným pomerom strán */}
      <div
        className="relative w-full max-w-[1100px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/10 bg-white"
        style={{
          aspectRatio: `${IMG_WIDTH}/${IMG_HEIGHT}`,
        }}
      >
        {/* pôdorys obrázok */}
        <img
          src="https://bytyvraji.sk/3NP.png"
          alt="3. NP"
          className="absolute left-0 top-0 w-full h-full object-contain pointer-events-none select-none"
        />

        {/* interaktívne overlay SVG */}
        <svg
          className="absolute left-0 top-0 w-full h-full"
          viewBox={`0 0 ${IMG_WIDTH} ${IMG_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {APARTMENTS.map((apt) => {
            const adjusted = adjustCoordArray(apt.coords);
            const isHovered = hovered === apt.id;
            const { fill, stroke } = getColorsForStatus(
              apt.status,
              isHovered
            );

            if (apt.shape === "rect") {
              const { x, y, w, h } = getRectFromCoords(adjusted);

              return (
                <g key={apt.id}>
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={2}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => handleEnter(e, apt)}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick(apt)}
                  />
                  {/* badge */}
                  <foreignObject
                    x={x + 4}
                    y={y + 4}
                    width={80}
                    height={30}
                    pointerEvents="none"
                  >
                    <StatusBadge apt={apt} />
                  </foreignObject>
                </g>
              );
            } else {
              // polygon
              const pts: string[] = [];
              for (let i = 0; i < adjusted.length; i += 2) {
                pts.push(`${adjusted[i]},${adjusted[i + 1]}`);
              }

              const firstX = adjusted[0];
              const firstY = adjusted[1];

              return (
                <g key={apt.id}>
                  <polygon
                    points={pts.join(" ")}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={2}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => handleEnter(e, apt)}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick(apt)}
                  />
                  <foreignObject
                    x={firstX}
                    y={firstY - 20}
                    width={80}
                    height={30}
                    pointerEvents="none"
                  >
                    <StatusBadge apt={apt} />
                  </foreignObject>
                </g>
              );
            }
          })}
        </svg>
      </div>

      {/* tooltip */}
      <ApartmentTooltip
        show={tooltip.show}
        x={tooltip.x}
        y={tooltip.y}
        apt={tooltip.apt}
      />
    </div>
  );
}

/* ------- Pomocné komponenty ------- */

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className={`w-3 h-3 rounded-sm shadow ${color}`} />
      <span className="text-slate-700">{label}</span>
    </div>
  );
}

function StatusBadge({ apt }: { apt: any }) {
  let bg = "bg-emerald-600 text-white";
  if (apt.status === "Predaný") bg = "bg-red-600 text-white";
  else if (apt.status === "Rezervovaný")
    bg = "bg-yellow-500 text-black";

  return (
    <div
      className={`inline-block whitespace-nowrap text-[10px] leading-none font-semibold px-1.5 py-1 rounded-md shadow ${bg}`}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Inter", system-ui, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      Byt {apt.id}
    </div>
  );
}

function ApartmentTooltip({
  show,
  x,
  y,
  apt,
}: {
  show: boolean;
  x: number;
  y: number;
  apt: any;
}) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {show && apt && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            mass: 0.4,
          }}
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="min-w-[200px] max-w-[260px] rounded-xl bg-white shadow-xl ring-1 ring-black/10 p-3 text-[12px] leading-tight text-slate-900">
            <div className="flex items-start justify-between">
              <div className="font-semibold text-[13px]">
                Byt {apt.id}
              </div>
              <StatusPill status={apt.status} />
            </div>

            <div className="mt-2 grid gap-1 text-[12px] text-slate-700">
              <div className="flex justify-between">
                <span>Dispozícia</span>
                <span className="font-medium text-slate-900">
                  {apt.area}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Cena</span>
                <span className="font-medium text-slate-900">
                  {apt.price}
                </span>
              </div>
            </div>

            <div className="mt-3 text-center text-[12px] text-sky-600 font-medium">
              Klikni pre detail ›
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function StatusPill({ status }: { status: string }) {
  let bg = "bg-emerald-600 text-white";
  if (status === "Predaný") bg = "bg-red-600 text-white";
  else if (status === "Rezervovaný")
    bg = "bg-yellow-500 text-black";

  return (
    <span
      className={`text-[10px] leading-none font-semibold px-1.5 py-1 rounded-md shadow ${bg}`}
    >
      {status}
    </span>
  );
}

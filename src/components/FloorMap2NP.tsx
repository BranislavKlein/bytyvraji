import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function FloorMap2NP() {
  const IMG_WIDTH = 1241;
  const IMG_HEIGHT = 807;

  const SCALE_X = 1.0;
  const SCALE_Y = 1.0;
  const OFFSET_X = 0;
  const OFFSET_Y = 0;

  // TODO: nastav reálne statusy/metry/ ceny/linky
  const APARTMENTS = [
    { id: "1", shape: "rect", coords: [26, 604, 136, 781],
      status: "Voľný", area: "3i • ?? m²", price: "—", link: "/byt/1" },
    { id: "2", shape: "rect", coords: [147, 604, 258, 780],
      status: "Voľný", area: "3i • ?? m²", price: "—", link: "/byt/2" },
    { id: "3", shape: "rect", coords: [265, 604, 381, 781],
      status: "Voľný", area: "3i • ?? m²", price: "—", link: "/byt/3" },
    { id: "4", shape: "rect", coords: [388, 604, 504, 781],
      status: "Voľný", area: "4i • ?? m²", price: "—", link: "/byt/4" },
    { id: "5", shape: "rect", coords: [510, 605, 624, 781],
      status: "Voľný", area: "3i • ?? m²", price: "—", link: "/byt/5" },

    { id: "9", shape: "rect", coords: [331, 582, 90, 454],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/9" },
    { id: "10", shape: "rect", coords: [291, 446, 100, 388],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/10" },
    { id: "11", shape: "rect", coords: [214, 341, 100, 98],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/11" },
    { id: "12", shape: "rect", coords: [332, 339, 219, 98],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/12" },
    { id: "13", shape: "rect", coords: [455, 339, 341, 100],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/13" },
    { id: "14", shape: "rect", coords: [575, 341, 461, 99],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/14" },
    { id: "15", shape: "rect", coords: [701, 341, 584, 99],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/15" },
    { id: "16", shape: "rect", coords: [814, 341, 708, 100],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/16" },
    { id: "17", shape: "rect", coords: [935, 339, 827, 102],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/17" },

    { id: "18", shape: "poly", coords: [
        1039,183,
        957,183,
        957,78,
        1138,78,
        1139,138,
        1042,138,
      ],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/18"
    },
    { id: "19", shape: "poly", coords: [
        991,190,
        1045,189,
        1045,144,
        1137,146,
        1137,297,
        991,297,
      ],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/19"
    },
    { id: "20", shape: "poly", coords: [
        958,345,
        1136,343,
        1138,483,
        1055,484,
        1054,420,
        960,421,
      ],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/20"
    },
    { id: "21", shape: "poly", coords: [
        956,429,
        1047,428,
        1050,489,
        1138,492,
        1138,587,
        958,586,
      ],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/21"
    },
    { id: "22", shape: "poly", coords: [
        719,468,
        937,468,
        939,587,
        717,587,
      ],
      status: "Voľný", area: "?? • ?? m²", price: "—", link: "/byt/22"
    },
  ];

  // ---- COLORS podľa stavu + hover ----
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

  // pôvodný scale/offset
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

  // ✅ OPRAVENÉ: normálne vypočíta x,y,w,h nech je poradie rohov hocijaké
  function getRectFromCoordsNormalized(adjusted: number[]) {
    const [x1, y1, x2, y2] = adjusted;

    const left = Math.min(x1, x2);
    const right = Math.max(x1, x2);
    const top = Math.min(y1, y2);
    const bottom = Math.max(y1, y2);

    return {
      x: left,
      y: top,
      w: right - left,
      h: bottom - top,
    };
  }

  // state na hover + tooltip
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
            2. NP – Pôdorys
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

      {/* wrapper s pomerom strán */}
      <div
        className="relative w-full max-w-[1100px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/10 bg-white"
        style={{
          aspectRatio: `${IMG_WIDTH}/${IMG_HEIGHT}`,
        }}
      >
        {/* obrázok */}
        <img
          src="https://bytyvraji.sk/2NP.png"
          alt="2. NP"
          className="absolute left-0 top-0 w-full h-full object-contain pointer-events-none select-none"
        />

        {/* overlay */}
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
              const { x, y, w, h } =
                getRectFromCoordsNormalized(adjusted);

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

      <ApartmentTooltip
        show={tooltip.show}
        x={tooltip.x}
        y={tooltip.y}
        apt={tooltip.apt}
      />
    </div>
  );
}

/* ------- pomocné komponenty ------- */

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

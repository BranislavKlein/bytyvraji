import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

export default function FloorMap1NP() {
  // const navigate = useNavigate();

  const IMG_WIDTH = 1175;
  const IMG_HEIGHT = 807;

  const SCALE_X = 1.0;
  const SCALE_Y = 1.0;
  const OFFSET_X = 0;
  const OFFSET_Y = 0;

  const APARTMENTS = [
    {
      id: "1",
      shape: "rect",
      coords: [35, 590, 141, 725],
      status: "Voľný",
      area: "3i • 72 m²",
      price: "289 000 €",
      link: "/byt/1",
    },
    {
      id: "2",
      shape: "rect",
      coords: [152, 590, 259, 722],
      status: "Rezervovaný",
      area: "3i • 70 m²",
      price: "—",
      link: "/byt/2",
    },
    {
      id: "3",
      shape: "rect",
      coords: [264, 589, 375, 722],
      status: "Voľný",
      area: "3i • 70 m²",
      price: "295 000 €",
      link: "/byt/3",
    },
    {
      id: "4",
      shape: "rect",
      coords: [381, 590, 492, 722],
      status: "Voľný",
      area: "4i • 81 m²",
      price: "315 000 €",
      link: "/byt/4",
    },
    {
      id: "5",
      shape: "rect",
      coords: [498, 590, 605, 722],
      status: "Predaný",
      area: "3i • 69 m²",
      price: "—",
      link: "/byt/5",
    },
    {
      id: "6",
      shape: "rect",
      coords: [614, 386, 902, 531],
      status: "Voľný",
      area: "4i • 84 m²",
      price: "329 000 €",
      link: "/byt/6",
    },
    {
      id: "7",
      shape: "rect",
      coords: [923, 388, 1094, 535],
      status: "Voľný",
      area: "4i • 86 m²",
      price: "339 000 €",
      link: "/byt/7",
    },
    {
      id: "8",
      shape: "poly",
      coords: [
        922, 211,
        1092, 212,
        1094, 381,
        964, 382,
        962, 343,
        923, 343,
      ],
      status: "Voľný",
      area: "2i • 54 m²",
      price: "239 000 €",
      link: "/byt/8",
    },
  ];

  // ----------------------
  // ⭐ NEW: color helper
  // ----------------------
  function getColorsForStatus(status: string, hovered: boolean) {
    // we'll return solid-ish pastel fill + visible stroke
    // and on hover we'll bump the opacity/darken a bit

    if (status === "Predaný") {
      return {
        fill: hovered
          ? "rgba(239, 68, 68, 0.55)" // darker red (tailwind red-500-ish)
          : "rgba(239, 68, 68, 0.35)",
        stroke: hovered
          ? "rgba(185, 28, 28, 0.9)" // red-700-ish
          : "rgba(185, 28, 28, 0.6)",
      };
    }

    if (status === "Rezervovaný") {
      return {
        fill: hovered
          ? "rgba(234, 179, 8, 0.55)" // darker amber/yellow
          : "rgba(234, 179, 8, 0.35)",
        stroke: hovered
          ? "rgba(161, 98, 7, 0.9)"
          : "rgba(161, 98, 7, 0.6)",
      };
    }

    // default = "Voľný"
    return {
      fill: hovered
        ? "rgba(16, 185, 129, 0.55)" // emerald-ish
        : "rgba(16, 185, 129, 0.35)",
      stroke: hovered
        ? "rgba(6, 95, 70, 0.9)"
        : "rgba(6, 95, 70, 0.6)",
    };
  }

  // geometry helpers
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

  // state
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
      // navigate(apt.link)
      window.location.href = apt.link;
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* hlavička + legenda */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 w-full max-w-[1100px]">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            1. NP – Pôdorys
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
        {/* obrázok */}
        <img
          src="https://bytyvraji.sk/1NP.png"
          alt="1. NP"
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

            // ⭐ NEW: get the proper colors based on status + hover
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
                    fill={fill}               // ⭐ changed
                    stroke={stroke}           // ⭐ changed
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
                    fill={fill}             // ⭐ changed
                    stroke={stroke}         // ⭐ changed
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

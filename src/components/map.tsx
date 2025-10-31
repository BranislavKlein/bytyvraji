import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// (nechávané ako fallback na default ikonu, ak by vlastná nebola dostupná)
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

type Props = {
  lat?: number;
  lng?: number;
  zoom?: number;
  height?: number;
  title?: string;
  showLinks?: boolean;
  /** voliteľne: vlastná URL ikony (ak nič, použijem tvoju) */
  markerUrl?: string;
  /** voliteľne: veľkosť ikony [w,h] */
  markerSize?: [number, number];
};

function FlyTo({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], zoom, { animate: true });
  }, [lat, lng, zoom, map]);
  return null;
}

export default function OsMap({
  lat = 48.95002703956508,
  lng = 20.506984033554172,
  zoom = 17,
  height = 440,
  title = "Presná poloha projektu",
  showLinks = true,
  markerUrl = "https://bytyvraji.sk/marker.svg", // alebo uložiť do /public a dať "/marker.svg"
  markerSize = [38, 38],
}: Props) {
  const [w, h] = markerSize;
  const customIcon = L.icon({
    iconUrl: markerUrl,
    iconSize: [w, h],
    iconAnchor: [w / 2, h],     // špička dole v strede
    popupAnchor: [0, -h + 8],   // popup nad ikonou
  });

  const gmapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div style={{ width: "100%", height, borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,.08)" }}>
      <MapContainer center={[lat, lng]} zoom={zoom} style={{ width: "100%", height: "100%" }} scrollWheelZoom>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> prispievatelia'
          maxZoom={20}
        />

        {/* 👇 vlastný pekný marker */}
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <strong>{title}</strong>
            {showLinks && (
              <div style={{ marginTop: 8, display: "flex", gap: 8, flexDirection: "column" }}>
                <a href={gmapsLink} target="_blank" rel="noreferrer">Otvoriť v Google Mapách</a>
                <a href={directionsLink} target="_blank" rel="noreferrer">Spustiť navigáciu</a>
              </div>
            )}
          </Popup>
        </Marker>

        <FlyTo lat={lat} lng={lng} zoom={zoom} />
      </MapContainer>
    </div>
  );
}
 
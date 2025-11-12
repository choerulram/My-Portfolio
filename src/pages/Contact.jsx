import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon for leaflet in Vite/React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  const [coords, setCoords] = useState(null);
  // const [locError, setLocError] = useState(null);
  const defaultCoords = { lat: -7.618529938508299, lng: 109.19567102572405 }; // Lokasi user

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {},
        { timeout: 5000 }
      );
    } else {
      // setLocError("Geolocation tidak didukung browser.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-light">
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-16 px-2 md:px-4">
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-6 md:gap-10">
          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold text-highlight mb-2 text-center">
            Kontak Saya
          </h1>
          <p className="text-center text-secondary mb-4 md:mb-6 text-sm md:text-base">
            Silakan hubungi saya langsung melalui email, telepon, atau media
            sosial di bawah ini.
          </p>
          {/* Form Kontak dihapus, hanya card info kontak yang ditampilkan */}
          {/* Info Kontak Langsung & Sosial Media */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-3 md:p-6 flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <div className="font-semibold text-highlight text-sm md:text-base">
                  Email
                </div>
                <a
                  href="mailto:achmadchoerul12345@email.com"
                  className="text-secondary hover:underline text-xs md:text-base"
                >
                  achmadchoerul12345@email.com
                </a>
              </div>
              <div>
                <div className="font-semibold text-highlight text-sm md:text-base">
                  Telepon
                </div>
                <a
                  href="tel:+6281294029308"
                  className="text-secondary hover:underline text-xs md:text-base"
                >
                  +62 812-9402-9308
                </a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-highlight mb-1 text-sm md:text-base">
                Social Media
              </div>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/achmad-choerul-ramdhani-0b237b279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight transition"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/choerulram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight transition"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* Tambahkan social media lain jika perlu */}
              </div>
            </div>
            {/* Lokasi (opsional) */}
            <div>
              <div className="font-semibold text-highlight mb-1 text-sm md:text-base">
                Lokasi
              </div>
              <div className="text-secondary mb-2 text-xs md:text-base">
                {coords ? (
                  <span>Lokasi Anda terdeteksi</span>
                ) : (
                  <span>Lokasi rumah saya</span>
                )}
              </div>
              <div className="rounded-xl overflow-hidden border border-highlight/20 shadow-lg w-full h-52 md:h-72">
                <MapContainer
                  center={coords || defaultCoords}
                  zoom={13}
                  scrollWheelZoom={true}
                  style={{ width: "100%", height: "100%" }}
                >
                  <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Jalan">
                      <TileLayer
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satelit">
                      <TileLayer
                        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                      />
                    </LayersControl.BaseLayer>
                  </LayersControl>
                  <Marker position={coords || defaultCoords} />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
        {/* Liquid Glass Background Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-44 h-44 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Contact;

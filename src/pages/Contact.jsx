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
  const [locError, setLocError] = useState(null);
  const defaultCoords = { lat: -6.9175, lng: 107.6191 }; // Bandung

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () =>
          setLocError(
            "Tidak dapat mengakses lokasi. Menampilkan lokasi default."
          ),
        { timeout: 5000 }
      );
    } else {
      setLocError("Geolocation tidak didukung browser.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-light">
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-10">
          {/* Judul */}
          <h1 className="text-3xl font-bold text-highlight mb-2 text-center">
            Kontak Saya
          </h1>
          <p className="text-center text-secondary mb-6">
            Silakan hubungi saya melalui form di bawah atau langsung melalui
            email/telepon.
          </p>
          {/* Form Kontak */}
          <form className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-highlight">
                Nama
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-dark/80 border border-highlight/30 px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-highlight"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-highlight">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-dark/80 border border-highlight/30 px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-highlight"
                placeholder="email@domain.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-highlight">
                Pesan
              </label>
              <textarea
                className="w-full rounded-lg bg-dark/80 border border-highlight/30 px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-highlight"
                rows={4}
                placeholder="Tulis pesan Anda..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-highlight text-main font-bold shadow hover:bg-secondary transition text-sm border-2 border-highlight flex items-center justify-center gap-2"
            >
              Kirim Pesan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75V19.5A2.25 2.25 0 006.75 21.75h10.5a2.25 2.25 0 002.25-2.25V9.75"
                />
              </svg>
            </button>
          </form>
          {/* Info Kontak Langsung & Sosial Media */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-highlight/20 shadow p-6 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <div className="font-semibold text-highlight">Email</div>
                <a
                  href="mailto:emailkamu@email.com"
                  className="text-secondary hover:underline"
                >
                  emailkamu@email.com
                </a>
              </div>
              <div>
                <div className="font-semibold text-highlight">Telepon</div>
                <a
                  href="tel:+6281234567890"
                  className="text-secondary hover:underline"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-highlight mb-1">
                Social Media
              </div>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight transition"
                >
                  <svg
                    className="w-6 h-6"
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
              <div className="font-semibold text-highlight mb-1">Lokasi</div>
              <div className="text-secondary mb-2">
                {locError ? (
                  <span>{locError}</span>
                ) : coords ? (
                  <span>Lokasi Anda terdeteksi</span>
                ) : (
                  <span>Mendeteksi lokasi...</span>
                )}
              </div>
              <div className="rounded-xl overflow-hidden border border-highlight/20 shadow-lg w-full h-72">
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
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Contact;

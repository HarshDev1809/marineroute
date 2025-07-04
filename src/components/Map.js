"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CoordinatesInput from "./CoordinatesInput";
import { flipCoordinates } from "@/utils/flipCoordinates";
import formatCoordinates from "@/utils/formatCoordinates";

export default function Map({ route, coordinates }) {
  useEffect(() => {
    const map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 3,
      zoomControl: false,
       worldCopyJump: false, // prevent duplicated world copies on drag
  maxBounds: [
    [-85, -180],
    [85, 180]
  ],
  maxBoundsViscosity: 1.0, // Makes the bounds feel "sticky"
   minZoom: 2,
  maxZoom: 12
    });

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; Carto",
      }
    ).addTo(map);

    if (route && route.length) {
      const flippedCoords = flipCoordinates(route);

      // Add polyline
      const polyline = L.polyline(flippedCoords, { color: "black" }).addTo(map);
      map.fitBounds(polyline.getBounds());
    }

    if (coordinates && coordinates.length) {
      coordinates.forEach(([lon, lat], index) => {
        const divIcon = L.divIcon({
          className: "custom-div-icon",
          html: `
    <div style="
      position: relative;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 14px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      white-space: nowrap;
      text-align: center;
      display: inline-block;
    ">
      ${formatCoordinates(lat, lon).join("<br>")}
      <div style="
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid white;
        filter: drop-shadow(0 -1px 1px rgba(0,0,0,0.1));
        z-index: 1;
      "></div>
    </div>
  `,
          iconSize: null,
          iconAnchor: [47, 70], // Adjust based on visual height of the div
        });

        L.marker([lat, lon], { icon: divIcon }).addTo(map);
      });
    }

    return () => {
      map.remove();
    };
  }, [coordinates]);

  return (
    <div className="relative w-full h-screen">
      <div id="map" className="w-full h-full z-0" />
      <CoordinatesInput />
    </div>
  );
}

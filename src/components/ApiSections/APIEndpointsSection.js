"use client";

import Link from "next/link";
import CompactApiNotice from "../CompactApiNotice";

export default function APIEndpointsSection() {
  return (
    <section className="max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        API Endpoints
      </h1>

      <CompactApiNotice />

      <p className="text-gray-700 mb-6">
        These are the primary HTTP endpoints provided by the MarineRoute API.
        All endpoints accept{" "}
        <code className="bg-gray-100 px-1 rounded">POST</code> requests with a
        JSON body containing coordinate arrays.
      </p>

      <div className="space-y-6">
        {/* Route Endpoint */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-blue-800">POST /route</h2>
          <p className="text-gray-700">
            Returns a realistic marine route between two or more geographic
            points. Ideal for visualizing shipping paths on a map. Includes both
            path and distance.
          </p>
          <Link
            href="/docs/api/usage#1-get-marine-route"
            className="text-blue-600 underline mt-1 inline-block"
          >
            View example →
          </Link>
        </div>

        {/* Distance Endpoint */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-xl font-semibold text-green-800">
            POST /distance
          </h2>
          <p className="text-gray-700">
            Returns only the total estimated distance between coordinates,
            without the full routing path. Useful for dashboards, logistics
            estimations, or fast computations.
          </p>
          <Link
            href="/docs/api/usage#2-get-distance-only"
            className="text-green-600 underline mt-1 inline-block"
          >
            View example →
          </Link>
        </div>

        {/* Healthcheck or Info Endpoint (Optional) */}
        <div className="border-l-4 border-gray-500 pl-4">
          <h2 className="text-xl font-semibold text-gray-800">GET /</h2>
          <p className="text-gray-700">
            Basic health check endpoint. Returns a friendly status message and
            metadata like version, uptime, etc. Optional but useful for testing
            connectivity.
          </p>
        </div>
      </div>
    </section>
  );
}

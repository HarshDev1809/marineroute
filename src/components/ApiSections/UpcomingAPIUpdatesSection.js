"use client";

import CompactApiNotice from "@/components/CompactApiNotice";

export default function UpcomingAPIUpdatesSection() {
  return (
    <section className="mt-12 mb-16">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Upcoming API Features & Improvements
      </h1>

      <CompactApiNotice />

      <div className="space-y-8 text-gray-800 max-w-4xl mx-auto">

        <div>
          <h2 className="text-2xl font-semibold mb-1">Q3 2025 (Coming Soon)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              New <code>/ports</code> endpoint to fetch nearest port data and maritime metadata.
            </li>
            <li>
              JSON Schema validation for payloads to ensure faster debugging and better feedback.
            </li>
            <li>
              Full OpenAPI (Swagger) documentation with built-in &quot;Try It&quot; feature.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-1">Q4 2025 (In Planning)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              WebSocket support for live route tracking and progressive distance calculations.
            </li>
            <li>
              Global rate-limiting logic to prevent accidental overloads (soft caps, no auth needed).
            </li>
            <li>
              AI-assisted rerouting based on simulated weather and piracy risk zones.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

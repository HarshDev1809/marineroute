"use client";

import CompactApiNotice from "@/components/CompactApiNotice";

export default function NewAPIUpdatesSection() {
  return (
    <section className="mt-10">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Latest API Updates & Improvements
      </h1>

      <CompactApiNotice />

      <div className="space-y-8 text-gray-800 max-w-4xl mx-auto">
        {/* May 2025 */}
        <div>
          <h2 className="text-2xl font-semibold mb-1">May 2025</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Reduced response time by ~35% for <code>/route</code> endpoint
              through internal caching.
            </li>
            <li>
              Enhanced input validation — clearer error messages for invalid
              coordinates or malformed JSON.
            </li>
            <li>
              Updated OpenAPI schema (coming soon!) to reflect all optional
              fields and new metadata keys.
            </li>
          </ul>
        </div>

        {/* April 2025 */}
        <div>
          <h2 className="text-2xl font-semibold mb-1">April 2025</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              New <code>/distance</code> endpoint added for lightweight,
              distance-only requests.
            </li>
            <li>
              Improved CORS configuration for safer and broader client
              compatibility.
            </li>
            <li>
              Better error codes: now uses proper HTTP status codes like{" "}
              <code>400</code>, <code>422</code>, and <code>503</code>.
            </li>
          </ul>
        </div>

        {/* February 2025 */}
        <div>
          <h2 className="text-2xl font-semibold mb-1">February 2025</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Initial public launch of MarineRoute API (v1.0).</li>
            <li>
              Included endpoints: <code>/route</code>, <code>/distance</code>,
              and root health check <code>/</code>.
            </li>
            <li>
              Supports open, keyless access — free to use, no authentication
              required.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import CompactApiNotice from "@/components/CompactApiNotice";

export default function NewUpdatesSection() {
  return (
    <section className="mt-10">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Latest Updates & Improvements
      </h1>
        <CompactApiNotice />
      <div className="space-y-8 text-gray-800 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-1">May 2025</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Introduced enhanced error handling for Python dependency issues.
            </li>
            <li>
              Improved copy-to-clipboard button responsiveness in installation
              steps.
            </li>
            <li>
              Added detailed guidance on virtual environment activation for
              Linux users.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-1">March 2025</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Released official npm package <code>marineroute-js</code> with
              Python <code>searoute</code> integration.
            </li>
            <li>
              Included Problems & Limitations section to clarify package usage
              boundaries.
            </li>
            <li>
              Added API recommendation banner to guide users towards more stable
              production solutions.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-1">January 2025</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Initial public release of the package.</li>
            <li>
              Comprehensive installation instructions and troubleshooting guide.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

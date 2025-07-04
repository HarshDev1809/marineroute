"use client";

import CompactApiNotice from "@/components/CompactApiNotice";

export default function UpcomingUpdatesSection() {
  return (
    <section className="mt-12 mb-16">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Upcoming Features & Improvements
      </h1>

      <CompactApiNotice />

      <div className="space-y-8 text-gray-800 max-w-4xl mx-auto">

        <div>
          <h2 className="text-2xl font-semibold mb-1">Q3 2025 (Coming Soon)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Seamless Python environment auto-detection and setup wizard to simplify installation.</li>
            <li>Expanded API support with real-time marine traffic and weather integration.</li>
            <li>Improved cross-platform compatibility, especially for Linux and macOS users.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-1">Q4 2025 (In Planning)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enhanced error reporting with actionable solutions for common issues.</li>
            <li>Serverless deployment options to bridge the gap between Node.js and Python runtimes.</li>
            <li>Advanced routing algorithms that consider environmental and security factors.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
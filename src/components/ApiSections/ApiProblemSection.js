"use client";

import { FiAlertTriangle } from "react-icons/fi";
import CompactApiNotice from "../CompactApiNotice";

export default function ApiProblemSection() {
  return (
    <section className="mt-10">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        Known Limitations & Requirements
      </h1>

<CompactApiNotice />

      <div className="text-gray-800 space-y-6">
       
        {/* Problem 6: Not for Real-World Navigation */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700 mb-1">
            <FiAlertTriangle className="text-xl" />
            Not Intended for Real-World Maritime Navigation
          </h2>
          <p className="px-5">
            This tool is for research, educational, and demonstrational use. It{" "}
            <strong>does not account</strong> for real-time factors like
            weather, piracy, war zones, traffic congestion, or political
            restrictions. It should <strong>never</strong> be used by shipping
            companies or for actual navigation decisions.
          </p>

        </div>
      </div>
    </section>
  );
}

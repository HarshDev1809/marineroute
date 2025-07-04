"use client";

import CompactApiNotice from "@/components/CompactApiNotice";
import { FiAlertTriangle } from "react-icons/fi";

export default function ProblemsSection() {
  return (
    <section className="mt-10">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        Known Limitations & Requirements
      </h1>

      <CompactApiNotice />

      <div className="text-gray-800 space-y-6">
        {/* Problem 1: Python dependency */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700 mb-1">
            <FiAlertTriangle className="text-xl" />
            Requires Python Installed
          </h2>
          <p className="px-5">
            This package wraps Python’s <code>searoute</code> library, so{" "}
            <strong>Python (&gt;=3.6)</strong> must be installed on your system.
            Without it, this package will not function.
          </p>
        </div>

        {/* Problem 2: pip availability */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700 mb-1">
            <FiAlertTriangle className="text-xl" />
            pip Must Be Available
          </h2>
          <p className="px-5">
            <code>pip</code> is used to install the required Python libraries.
            If pip isn’t installed or isn’t in your system PATH, you&apos;ll
            encounter issues during setup.
          </p>
        </div>

        {/* Problem 3: OS-specific quirks */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700 mb-1">
            <FiAlertTriangle className="text-xl" />
            Cross-Platform Behavior May Vary
          </h2>
          <p className="px-5">
            Python’s environment differs slightly across Windows, macOS, and
            Linux. Watch out for:
          </p>
          <ul className="list-disc pl-10 mt-2 space-y-1">
            <li>Incorrect or missing PATH entries</li>
            <li>
              <code>python</code> vs <code>python3</code> command mismatch
            </li>
            <li>Permission errors with global installs</li>
            <li>
              On Linux, if using a virtual environment, you must activate the{" "}
              <code>venv</code> before running commands
            </li>
          </ul>
        </div>

        {/* Problem 4: No automatic Python setup */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700 mb-1">
            <FiAlertTriangle className="text-xl" />
            Python Dependencies Not Auto-Installed
          </h2>
          <p className="px-5">
            Installing the npm package does <strong>not</strong> install Python
            libraries like <code>searoute</code>. You must run{" "}
            <code className="bg-gray-100 px-1">pip install searoute</code>{" "}
            manually.
          </p>
        </div>

        {/* Problem 5: Not serverless-compatible */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700 mb-1">
            <FiAlertTriangle className="text-xl" />
            Not Compatible with Serverless Platforms
          </h2>
          <p className="px-5">
            Platforms like Vercel and Netlify don’t support Python runtime
            alongside Node.js. If you plan to deploy, consider using the{" "}
            <strong>official API instead</strong> of this package.
          </p>
        </div>

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
          <p className="px-5 mt-2 italic text-gray-700 py-10">
            Apart from this routing limitation, most other issues can be avoided
            by using the <strong>official API</strong>, which we strongly
            recommend for production environments.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import CompactApiNotice from "@/components/CompactApiNotice";

export default function TroubleshootingSection() {
  return (
    <section className="mt-12 mb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Troubleshooting Node Package Issues
      </h1>

    <CompactApiNotice />

      <div className="space-y-8 text-gray-800">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Package Not Found After Installation
          </h2>
          <p>
            Make sure you ran <code>npm install marineroute-js</code> in your
            project directory. If you installed it globally, try a local
            installation instead.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            Import or Require Errors
          </h2>
          <p>
            Double-check your import statements. For example:{" "}
            <code>import marineroute from &apos;marineroute-js&apos;;</code>. Also, verify
            your Node.js version supports ES Modules if you are using{" "}
            <code>import</code> syntax.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            Python Dependency Errors
          </h2>
          <p>
            This package depends on Python’s <code>searoute</code> library.
            Confirm that Python is installed and accessible in your system PATH
            by running <code>python --version</code> or{" "}
            <code>python3 --version</code>. Ensure you have installed{" "}
            <code>searoute</code> using <code>pip install searoute</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            Permission Issues on Installation
          </h2>
          <p>
            On Unix-based systems, you may need elevated permissions for some
            installations. Avoid using <code>sudo</code> with npm. Instead, use
            tools like <code>nvm</code> to manage Node versions and permissions
            properly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            Incompatible Node or Python Versions
          </h2>
          <p>
            Ensure your environment uses Node.js version 14 or higher, and
            Python version 3.6 or higher. Using outdated versions can cause
            unexpected errors or incompatibilities.
          </p>
        </div>
      </div>
    </section>
  );
}

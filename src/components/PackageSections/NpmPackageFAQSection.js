"use client";

export default function NpmPackageFAQSection() {
  return (
    <section className="mt-12 mb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-8 text-gray-800">

        <div>
          <h2 className="text-xl font-semibold mb-1">How do I install the package?</h2>
          <p>Simply run <code>npm install marineroute-js</code> in your project directory to add the package to your dependencies.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Does this package require Python?</h2>
          <p>Yes, the package depends on the Python <code>searoute</code> library to compute routes. Make sure Python and the <code>searoute</code> package are installed and accessible on your system.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Which Node.js versions are supported?</h2>
          <p>We recommend using Node.js version 14 or higher to ensure compatibility and smooth performance.</p>
        </div>

<div>
  <h2 className="text-xl font-semibold mb-1">How do I import the package in my project?</h2>
  <p>
    You can import using ES Modules syntax:{" "}
    <code>{`import { getRoute } from 'marineroute-js';`}</code> or use CommonJS:{" "}
    <code>{`const { getRoute } = require('marineroute-js');`}</code>
  </p>
</div>


        <div>
          <h2 className="text-xl font-semibold mb-1">Why am I getting errors related to Python or searoute?</h2>
          <p>Ensure Python is installed and available in your system PATH. Also verify that the <code>searoute</code> library is installed globally via <code>pip install searoute</code>. See our troubleshooting guide for details.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Is this package compatible with browsers?</h2>
          <p>This package is designed for Node.js environments. For browser usage, consider calling our API endpoints directly instead.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">How do I report bugs or request features?</h2>
          <p>Please open issues or feature requests on our GitHub repository. We actively monitor and respond to community feedback.</p>
        </div>

      </div>
    </section>
  );
}

"use client";

import Button from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";
import CompactApiNotice from "@/components/CompactApiNotice";
import PackageName from "@/components/PackageName";
import Link from "next/link";

export default function UsageSection() {
  return (
    <>
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        Usage
      </h1>

      {/* API recommendation */}
      <CompactApiNotice />

      <p className="text-gray-700 mb-4">
        Once you&apos;ve installed <PackageName /> and all the required dependencies,
        you&apos;re ready to start using it in your Node.js project. Here&apos;s a quick
        example of how to calculate a marine route using coordinates.
      </p>

      <p className="text-gray-700 mb-2 font-semibold">1. Import the module:</p>
      <div className="mb-4">
        <Button
          type="npm-command-common"
          command={`import { getRoute } from 'marineroute-js';`}
        />
      </div>

      <p className="text-gray-700 mb-2 font-semibold">
        2. Use it in your code:
      </p>
      <div className="bg-gray-100 rounded p-4 mb-6 relative">
        <CodeBlock
          code={`import { getRoute } from "marineroute-js";

const origin = [-122.3321, 47.6062]; // Seattle
const destination = [139.6917, 35.6895]; // Tokyo

getRoute(origin, destination)
  .then(route => console.log("Route:", route))
  .catch(err => console.error("Error:", err));`}
        />
      </div>

      <p className="text-gray-700 mb-4">
        Make sure that the Python environment is accessible (i.e., Python is
        installed and the <code>searoute</code> library is available globally).
        This package will spawn a Python process behind the scenes to fetch the
        route.
      </p>

      <p className="text-gray-700">
        For more options and advanced usage like distance-only queries or
        intermediate port information, see the{" "}
        <Link href="/docs/api" className="text-blue-700 underline">
          full API documentation
        </Link>
        .
      </p>
    </>
  );
}

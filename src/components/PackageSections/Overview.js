"use client";

import Disclaimer from "@/components/Disclaimer";
import PackageName from "@/components/PackageName";
import WarningAlert from "@/components/WarningAlert";
import Link from "next/link";

export default function Overview() {
  return (
    <>
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        Overview
      </h1>

      {/* Suggest using the API */}
      <WarningAlert
        title="For best results, we recommend using our official API."
        className="mb-4"
        message={
          <>
            It provides a faster, more reliable, and hassle-free solution for
            calculating marine routes and distances.{" "}
            <Link
              href="/docs/api"
              className="text-yellow-800 underline hover:text-yellow-900 font-medium"
            >
              Explore the API
            </Link>
          </>
        }
      />

      {/* Description of the package */}
      <p className="text-gray-700 mb-2">
        <PackageName /> is a lightweight utility designed to compute approximate
        marine routes between two or more geographic coordinates. Inspired by
        Python’s <code>searoute</code>, it mimics realistic shipping routes over
        water using a simplified geospatial algorithm.
      </p>

      {/* Use cases */}
      <p className="text-gray-700 mb-2">
        This package is perfect for visualizing maritime logistics, educational
        tools, or generating mock sea routes on maps. It can also be used to
        estimate distances over water, helping with UI previews, dashboards, or
        map simulations.
      </p>

      {/* Features */}
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Estimate marine distances between multiple points</li>
        <li>Generates realistic, map-friendly routing paths</li>
        <li>Easy to integrate into Node apps or API endpoints</li>
        <li>Lightweight </li>
        <li>Inspired by proven geospatial models</li>
      </ul>

      {/* Installation instructions (optional)
      <div className="" id="basic-installation-section">
        <h2>Basic Installation</h2>
        <p>To install, use this command to install the </p>
        <div className="w-1/2 pb-2">
        <Button type="npm-command-common" />
        </div>
      </div> */}

      {/* Final note — the legal-ish disclaimer */}
      <Disclaimer className="mb-2" />
    </>
  );
}

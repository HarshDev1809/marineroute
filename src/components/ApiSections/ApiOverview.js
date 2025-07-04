"use client";

import Disclaimer from "@/components/Disclaimer";
import WarningAlert from "@/components/WarningAlert";

export default function ApiOverview() {
  return (
    <>
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        API Overview
      </h1>

      {/* API is Free Notice */}
      <WarningAlert
        title="This API is free and open to use — no API key required!"
        className="mb-4"
        message="You can make requests directly without any authentication or sign-up."
      />

      {/* What is the API for? */}
      <p className="text-gray-700 mb-2">
        The official <strong>Marineroute API</strong> delivers precise marine
        route calculations between geographic coordinates, powered by the same
        engine behind our JS and Python libraries — but faster, hosted, and
        production-ready.
      </p>

      {/* When to use API vs local package */}
      <p className="text-gray-700 mb-2">
        While the <code>marineroute-js</code> package works well locally for
        prototyping, we recommend the API for all serious, scalable, or
        commercial projects. It avoids Python dependency issues and runs on a
        secure, cloud-native infrastructure.
      </p>

      {/* Key benefits */}
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>No local Python setup or server configuration required</li>
        <li>Fast, accurate, and reliable — optimized for production use</li>
        <li>Built-in support for future route features and enhancements</li>
        <li>Ideal for mobile, web, and microservice architectures</li>
      </ul>

      {/* Legal-ish warning */}
      <Disclaimer className="mb-2" />
    </>
  );
}

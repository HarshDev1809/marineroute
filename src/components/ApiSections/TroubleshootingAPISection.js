"use client";

import CompactApiNotice from "@/components/CompactApiNotice";

export default function TroubleshootingAPISection() {
  return (
    <section className="mt-12 mb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Troubleshooting API Usage Issues
      </h1>

      <CompactApiNotice />

      <div className="space-y-8 text-gray-800">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Getting a 404 or “Not Found” Error
          </h2>
          <p>
            Double-check that the endpoint path is correct. For example, the GET
            route should be <code>/api/route</code> and the distance endpoint
            should be <code>/api/distance</code>. Also, ensure you&apos;re using{" "}
            <code>https://</code> in the base URL if you&apos;re on a deployed
            server.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Invalid Request Body</h2>
          <p>
            Ensure you’re sending a proper JSON payload with valid{" "}
            <code>origin</code> and <code>destination</code> arrays. Both should
            be of the format <code>[longitude, latitude]</code>. Example:
            <br />
            <code>
              {"{ origin: [-122.33, 47.60], destination: [139.69, 35.68] }"}
            </code>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">CORS Errors in Browser</h2>
          <p>
            If you&apos;re calling the API directly from a frontend app and see a
            CORS error, make sure the server allows cross-origin requests. If
            it&apos;s your deployment, update CORS headers. If you&apos;re using the
            official public API, it already supports CORS.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            No Response or Network Timeout
          </h2>
          <p>
            Check if your payload contains valid coordinates and that the server
            is up. Sometimes a malformed payload can cause the server to hang
            while parsing. Also, confirm your internet connection or firewall
            isn&apos;t blocking outgoing requests.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            Unexpected Server Error (500)
          </h2>
          <p>
            This usually happens if the underlying Python service fails to
            process the coordinates (e.g., too close together, or non-water
            paths). Try with known large-distance sea routes like Seattle to
            Tokyo to verify it&apos;s working.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            Can&apos;t Test with Curl or Postman
          </h2>
          <p>
            Make sure to set headers correctly in your request:
            <br />
            <code>{`Content-Type: application/json`}</code>
            <br />
            Also, ensure you&apos;re using POST for routes like{" "}
            <code>/api/route</code> or <code>/api/distance</code>, not GET.
          </p>
        </div>
      </div>
    </section>
  );
}

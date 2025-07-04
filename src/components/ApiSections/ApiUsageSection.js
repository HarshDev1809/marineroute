"use client";

import CodeBlock from "@/components/CodeBlock";
import CompactApiNotice from "@/components/CompactApiNotice";
import Link from "next/link";

export default function ApiUsageSection() {
  return (
    <>
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        API Usage
      </h1>

      {/* Notice */}
      <CompactApiNotice />

      <p className="text-gray-700 mb-4">
        The MarineRoute API is open and free for everyone. No API keys, no
        tokens — just hit the endpoint with your coordinates and get real-time
        marine routing results.
      </p>

      {/* ===================== GET ROUTE ===================== */}
      <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-1">
        1. Get Marine Route
      </h2>
      <p className="text-gray-700 mb-4">
        Marine Route provides a reliable API for calculating estimated maritime
        routes between two or more geospatial coordinates. It is designed for
        applications requiring accurate sea path estimations, such as marine
        logistics, and oceanographic analysis.
      </p>

      <p className="text-gray-700 mb-1">
        <b>End Point : </b>
        <code className="bg-gray-100 px-1 rounded">/get-route</code>
      </p>
      <p className="text-gray-700 mb-1">
        <b>HTTP Method :</b>
        <code className="bg-gray-100 px-1 rounded">POST</code>
      </p>
      <p className="text-gray-700 mb-1">
        <b>Payload:</b>{" "}
        <span>
          An <em>array</em> of coordinates in the format{" "}
          <em>[[longitude, latitude], [longitude, latitude]]</em>. The array
          should contain <strong>at least 2</strong> coordinate pairs.
        </span>
      </p>
      <pre className="bg-gray-100 text-sm rounded p-3 overflow-x-auto mt-2">
        <code className="text-gray-800">
          {`{
  "coordinates": [
    [72.8679, 18.949],
    [4.4792, 51.885]
  ]
}`}
        </code>
      </pre>

      <section className="text-gray-700 mb-4">
        <h4 className="font-semibold mb-2">Response:</h4>
        <p>
          The response from the{" "}
          <code className="bg-gray-100 px-1 rounded">/get-route</code> endpoint
          contains the following fields:
        </p>
        <ul className="list-disc list-inside mt-2 pl-4">
          <li>
            <code>message</code>: A general message describing the outcome of
            the API call.
          </li>
          <li>
            <code>status</code>: Indicates the status of the response. It can
            be:
            <ul className="list-disc list-inside ml-5">
              <li>
                <em>successful</em> - The request was successfully processed.
              </li>
              <li>
                <em>rejected</em> - The server rejected the client&apos;s request.
              </li>
              <li>
                <em>error</em> - An error occurred on the server while
                processing the request.
              </li>
            </ul>
          </li>
          <li>
            <code>route</code>: An array of coordinates representing the
            estimated maritime path between the input points.
          </li>
          <li>
            <code>distance</code>: The total distance of the computed route.
          </li>
          <li>
            <code>distance_unit</code>: The unit of measurement used for the
            total distance calculation (e.g., kilometers, nautical miles, etc.).
            Default unit is kilometers (km).
          </li>
          <li>
            <code>international_time_crossed</code>: Indicates whether the route
            crosses international time zones. If so, includes estimated route
            adjustments based on those transitions.
          </li>
        </ul>

        <h5 className="font-semibold mt-4 mb-2">Sample Response:</h5>
        <pre className="bg-gray-100 text-sm rounded p-4 overflow-x-auto">
          <code className="text-gray-800">
            {`{
  "status": "successfull",
  "data": {
    "route": [
      [72.80777, 18.941361],
      [72.4, 19],
      [69.999749, 18.43269],
      ...
      [4.429986, 51.71539]
    ],
    "distance": "011807.58",
    "distance_unit": "km",
    "internation_time_crossed": false
  },
  "message": "Route(s) fetched successfully.",
  "error": null,
  "code": 200
}`}
          </code>
        </pre>
      </section>

      <h2>Examples</h2>

      <h4 className="text-xl font-semibold mb-2">Using Fetch</h4>
      <CodeBlock
        code={`async function getMaritimeRoute() {
  try {
    const response = await fetch("https://api.marineroute.com/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coordinates: [
          [72.80777, 18.941361], // Mumbai
          [4.429986, 51.71539]   // Netherlands
        ]
      })
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const result = await response.json();
    console.log("Route:", result);
  } catch (error) {
    console.error("Failed to fetch route:", error);
  }
}

getMaritimeRoute();`}
      />

      <h4 className="text-xl font-semibold mt-6 mb-2"> Using Axios</h4>
      <CodeBlock
        code={`import axios from "axios";

async function getMaritimeRoute() {
  try {
    const response = await axios.post("https://api.marineroute.com/route", {
      coordinates: [
        [72.80777, 18.941361], // Mumbai
        [4.429986, 51.71539]   // Netherlands
      ]
    });

    console.log("Route:", response.data);
  } catch (error) {
    console.error("Failed to fetch route:", error);
  }
}

getMaritimeRoute();`}
      />

      <h4 className="text-xl font-semibold mt-6 mb-2"> Using cURL</h4>
      <CodeBlock
        code={`curl -X POST https://api.marineroute.com/route \\
  -H "Content-Type: application/json" \\
  -d '{
    "coordinates": [
      [72.80777, 18.941361],
      [4.429986, 51.71539]
    ]
  }'`}
      />

      <h4 className="text-lg font-semibold mt-6 mb-2"> Sample Response</h4>
      <CodeBlock
        code={`{
  "distance": 7503.87,
  "route": [
    [-122.3321, 47.6062],
    [-160.1234, 48.0000],
    [139.6917, 35.6895]
  ]
}`}
      />

      {/* ===================== GET DISTANCE ===================== */}
      <h2 className="text-2xl font-bold mt-12 mb-4 border-b pb-1">
        2. Get Distance Only
      </h2>

      <p className="text-gray-700 mb-4">
        If you only need the total maritime distance between two or more
        coordinates without retrieving the full route geometry, the{" "}
        <code className="bg-gray-100 px-1 rounded">/distance</code> endpoint is
        ideal. It&apos;s lightweight and optimized for quick distance estimations
        across oceans and seas.
      </p>

      <p className="text-gray-700 mb-1">
        <b>End Point : </b>
        <code className="bg-gray-100 px-1 rounded">/distance</code>
      </p>
      <p className="text-gray-700 mb-1">
        <b>HTTP Method :</b>
        <code className="bg-gray-100 px-1 rounded">POST</code>
      </p>
      <p className="text-gray-700 mb-1">
        <b>Payload:</b>{" "}
        <span>
          An <em>array</em> of coordinates in the format{" "}
          <em>[[longitude, latitude], [longitude, latitude]]</em>. The array
          should contain <strong>at least 2</strong> coordinate pairs.
        </span>
      </p>
      <pre className="bg-gray-100 text-sm rounded p-3 overflow-x-auto mt-2">
        <code className="text-gray-800">
          {`{
  "coordinates": [
    [72.8679, 18.949],
    [4.4792, 51.885]
  ]
}`}
        </code>
      </pre>

      <section className="text-gray-700 mb-4">
        <h4 className="font-semibold mb-2">Response:</h4>
        <p>
          The <code className="bg-gray-100 px-1 rounded">/distance</code>{" "}
          endpoint returns a minimal response with key information about the
          calculated sea distance.
        </p>
        <ul className="list-disc list-inside mt-2 pl-4">
          <li>
            <code>message</code>: A message indicating the result of the API
            call.
          </li>
          <li>
            <code>status</code>: The response status. It can be:
            <ul className="list-disc list-inside ml-5">
              <li>
                <em>successful</em> – The distance was successfully calculated.
              </li>
              <li>
                <em>rejected</em> – The server rejected the input or request.
              </li>
              <li>
                <em>error</em> – A server-side issue occurred.
              </li>
            </ul>
          </li>
          <li>
            <code>distance</code>: The total computed distance over water
            between the given coordinates.
          </li>
          <li>
            <code>distance_unit</code>: The unit used for measuring the
            distance. Defaults to kilometers (km).
          </li>
        </ul>

        <h5 className="font-semibold mt-4 mb-2">Sample Response:</h5>
        <pre className="bg-gray-100 text-sm rounded p-4 overflow-x-auto">
          <code className="text-gray-800">
            {`{
  "status": "successful",
  "data": {
    "distance": "011807.58",
    "distance_unit": "km"
  },
  "message": "Distance calculated successfully.",
  "error": null,
  "code": 200
}`}
          </code>
        </pre>
      </section>

      <h2>Examples</h2>

      <h4 className="text-xl font-semibold mb-2">→ Using Fetch</h4>
      <CodeBlock
        code={`async function getDistance() {
  try {
    const response = await fetch("https://api.marineroute.com/distance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coordinates: [
          [72.80777, 18.941361], // Mumbai
          [4.429986, 51.71539]   // Netherlands
        ]
      })
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const result = await response.json();
    console.log("Distance:", result);
  } catch (error) {
    console.error("Failed to fetch distance:", error);
  }
}

getDistance();`}
      />

      <h4 className="text-xl font-semibold mt-6 mb-2">→ Using Axios</h4>
      <CodeBlock
        code={`import axios from "axios";

async function getDistance() {
  try {
    const response = await axios.post("https://api.marineroute.com/distance", {
      coordinates: [
        [72.80777, 18.941361], // Mumbai
        [4.429986, 51.71539]   // Netherlands
      ]
    });

    console.log("Distance:", response.data);
  } catch (error) {
    console.error("Failed to fetch distance:", error);
  }
}

getDistance();`}
      />

      <h4 className="text-xl font-semibold mt-6 mb-2">→ Using cURL</h4>
      <CodeBlock
        code={`curl -X POST https://api.marineroute.com/distance \\
  -H "Content-Type: application/json" \\
  -d '{
    "coordinates": [
      [72.80777, 18.941361],
      [4.429986, 51.71539]
    ]
  }'`}
      />

      <h4 className="text-lg font-semibold mt-6 mb-2">→ Sample Response</h4>
      <CodeBlock
        code={`{
  "distance": 11807.58,
  "distance_unit": "km"
}`}
      />

      {/* Link to full docs */}
      <p className="text-gray-700 mt-6">
        For advanced options like intermediate stops or multi-leg paths, visit
        the{" "}
        <Link href="/docs/api" className="text-blue-700 underline font-medium">
          full API reference
        </Link>
        .
      </p>
    </>
  );
}

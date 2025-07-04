"use client";

export default function ApiFAQSection() {
  return (
    <section className="mt-12 mb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-6">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-8 text-gray-800">

        <div>
          <h2 className="text-xl font-semibold mb-1">Is an API key required to use the API?</h2>
          <p>No, our API is open and free to use with no authentication or API keys required. Just send your requests directly to the endpoints.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">What request formats are supported?</h2>
          <p>Our API accepts JSON-formatted POST requests with <code>origin</code> and <code>destination</code> arrays containing longitude and latitude coordinates.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Can I use the API in the browser?</h2>
          <p>Yes, but be mindful of CORS policies. Our public API supports CORS for frontend apps, but if you run into issues, consider proxying requests through your backend.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">What’s the difference between the route and distance endpoints?</h2>
          <p>The <code>/api/route</code> endpoint returns detailed routing information including waypoints, while <code>/api/distance</code> provides a quick total distance estimate between points.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Are there usage limits or rate limits?</h2>
          <p>Currently, there are no enforced rate limits or quotas. However, please use the API responsibly to ensure stable performance for all users.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">How accurate are the routes generated?</h2>
          <p>Routes are approximate, based on simplified geospatial algorithms inspired by Python’s <code>searoute</code>. They provide realistic marine paths but should not be used for navigation-critical applications.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">What do I do if I encounter errors?</h2>
          <p>Check the troubleshooting section in our docs first. For persistent issues, please open an issue on our GitHub repository or contact support via the provided channels.</p>
        </div>

      </div>
    </section>
  );
}

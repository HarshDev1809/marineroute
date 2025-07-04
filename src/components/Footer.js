import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Site Overview */}
        <div>
          <h4 className="text-lg font-semibold mb-2">MarineRoute</h4>
          <p className="text-sm text-gray-600">
            Open-source maritime routing library and API. Estimate and visualize sea routes effortlessly in modern apps.
          </p>
        </div>

        {/* NPM Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">NPM Package</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/documentation/npm-package" className="hover:underline">Package Docs</Link>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/marineroute-js"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on NPM
              </a>
            </li>
            <li>
              <a
                href="https://github.com/HarshDev1809/marineroute-js"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>

        {/* API Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">API</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/documentation/api" className="hover:underline">API Docs</Link>
            </li>
            <li>
              <a
                href="https://github.com/HarshDev1809/marineroute-api"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>

        {/* Map Demo */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Map Visualizer</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/map/route" className="hover:underline">
              Check Route
              </Link>
            </li>
          </ul>
        </div>

                <div>
          <Link href={"/faq"}  className="hover:underline">
          <h4 className="text-lg font-semibold mb-2">Faq</h4>
          </Link>
         
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Email: dev182000@gmail.com</li>
            <li>
              <a
                href="https://github.com/HarshDev1809"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harshdev1809"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
             <li>
              <a
                href="https://www.npmjs.com/~dev182000"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NPM Profile
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} MarineRoute — Built with ❤️ by Harsh Dev.
      </div>
    </footer>
  );
}
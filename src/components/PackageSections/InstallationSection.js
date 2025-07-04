"use client";

import Button from "@/components/Button";
import CompactApiNotice from "@/components/CompactApiNotice";
import PackageName from "@/components/PackageName";
import Link from "next/link";

export default function InstallationSection() {
  return (
    <>
      <h1 className="text-4xl font-bold border-b pb-2 text-center mb-4">
        Installation
      </h1>

      {/* API recommendation banner */}
      <CompactApiNotice />

      <p className="text-gray-700 mb-2">
        <PackageName /> is a Node.js wrapper around Python’s{" "}
        <code>searoute</code> library, used to calculate marine routes. Before
        installing this package, you&apos;ll need to have Python and the{" "}
        <code>searoute</code> library set up on your system.
      </p>

      <p className="text-gray-700 mb-6">
        Follow the steps below to get everything running smoothly:
      </p>

      <ol className="list-decimal pl-6 text-gray-700 space-y-6 mb-6">
        <li>
          <div className="font-semibold text-lg mb-1">
            Step 1: Check if Python is installed
          </div>
          <div>
            Open your terminal and run:
            <div className="mt-2 space-y-1">
              <Button type="npm-command-common" command="python --version" />
              <span className="text-sm text-gray-500">Or</span>
              <Button type="npm-command-common" command="python3 --version" />
            </div>
            If you see a version number like <code>Python 3.x.x</code>, you&apos;re
            good to go.
          </div>
        </li>

        <li>
          <div className="font-semibold text-lg mb-1">
            Step 2: Install Python (if not installed)
          </div>
          <p>
            Download the latest version for your OS from the{" "}
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700"
            >
              official Python website
            </a>
            .
            <br />
            <span>
              Make sure to check <em>&quot;Add Python to PATH&quot;</em> during
              installation!
            </span>
          </p>
        </li>

        <li>
          <div className="font-semibold text-lg mb-1">
            Step 3: Check if pip is installed
          </div>
          <div>
            Run the following command to check for pip:
            <div className="mt-2">
              <Button type="npm-command-common" command="pip --version" />
            </div>
            If pip isn&apos;t recognized, proceed to the next step.
          </div>
        </li>

        <li>
          <div className="font-semibold text-lg mb-1">
            Step 4: Install pip manually (if needed)
          </div>
          <div>
            Download the{" "}
            <a
              href="https://bootstrap.pypa.io/get-pip.py"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700"
            >
              get-pip.py
            </a>{" "}
            script and then run:
            <div className="mt-2">
              <Button type="npm-command-common" command="python get-pip.py" />
            </div>
            <p>
              You might need to use <code>python3</code> instead
            </p>
          </div>
        </li>

        <li>
          <div className="font-semibold text-lg mb-1">
            Step 5: Install the <code>searoute</code> Python library
          </div>
          <div>
            Install it using pip:
            <div className="mt-2">
              <Button
                type="npm-command-common"
                command="pip install searoute"
              />
            </div>
          </div>
        </li>

        <li>
          <div className="font-semibold text-lg mb-1">
            Step 6: Install <PackageName /> via npm
          </div>
          <div>
            Now you&apos;re ready to install the Node package:
            <div className="mt-2">
              <Button
                type="npm-command-common"
                command="npm i marineroute-js"
              />
            </div>
          </div>
        </li>
      </ol>

      <p className="text-gray-700">
        That’s it! You&apos;re ready to start building with <PackageName />. For
        deeper integration tips, check out our{" "}
        <Link href="/documentation/api" className="text-blue-700 underline">
          API documentation
        </Link>
        .
      </p>
    </>
  );
}

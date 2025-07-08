import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import RedirectLink from "@/components/RedirectLink";
import { FaNpm } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { CiServer } from "react-icons/ci";

import Image from 'next/image';

function IntroSection() {
  return (
    <section className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image
          src="/img/world-map.png"
          alt="World Map"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Rest of your content */}
      <div className="relative z-10 flex flex-col h-full items-center pt-40">
        <h1 className="text-black text-4xl font-bold">
          Welcome to MarineRoute
        </h1>
        <p>A free and open source solution for checking sea routes</p>
        <div className="flex flex-row items-center gap-2 w-1/2 pt-10">
          <Button
            type="link-btn"
            href="/documentation/npm-package"
            label={
              <span className="flex justify-center items-center gap-2">
                <FaNpm size={30} /> Check NPM Package
              </span>
            }
          />
          <Button
            type="link-btn"
            href="/documentation/api"
            label={
              <span className="flex justify-center items-center gap-2">
                <TbApi size={30} /> Check API
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

function NpmSection() {
  return (
    <section className="flex flex-row h-[80vh] w-screen">
      <div className="w-3/5 flex flex-col items-center h-full  pt-20 gap-3">
        <FaNpm size={150} />
        <div className="w-1/2">
          <Button type="npm-command" />
        </div>
      </div>
      <div className="bg-gray-100 h-full w-2/5 flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          MarineRoute JS
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed text-base">
          A lightweight JavaScript library to calculate and visualize sea routes
          between ports. Designed for modern web apps, MarineRoute handles
          real-world geospatial data so you can focus on building seamless
          maritime experiences.
        </p>
        <div className="flex flex-row gap-4  mt-10">
          <RedirectLink
            text="Visit NPM"
            href="https://www.npmjs.com/package/marineroute-js"
          />
          <RedirectLink text="Check Documentation" />
        </div>
      </div>
    </section>
  );
}

function ApiSection() {
  return (
    <section className="flex flex-row h-[80vh] w-screen">
      <div className="bg-gray-100 h-full w-2/5 flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          MarineRoute API
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed text-base">
          The MarineRoute API offers estimated sea routes between major global
          ports using geospatial calculations. It&apos;s designed to support
          maritime-focused applications with a simple RESTful interface, ideal
          for logistics, planning, and oceanic data visualization.
        </p>

        <div className="flex flex-row gap-4  mt-10">
          <RedirectLink
            text="Visit GitHub"
            href="https://github.com/HarshDev1809/marineroute-api"
          />
          <RedirectLink text="Check Documentation" />
        </div>
      </div>
      <div className="w-3/5 flex flex-col justify-center items-center">
        <TbApi size={200} />
        <div className="flex flex-row items-center gap-1">
          <CiServer size={100} />
          <BiTransferAlt size={50} />
          <MdOutlineComputer size={100} />
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="flex flex-row h-[80vh] w-screen">
      <div className="w-3/5 flex flex-col justify-center items-center h-full gap-3">
        <div className=" h-full w-full bg-[url('/img/map-demo.png')] bg-cover bg-center"></div>
      </div>
      <div className="bg-gray-100 h-full w-2/5 flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Explore Routes on the Interactive Map
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed text-base">
          Input coordinates and instantly visualize estimated sea routes plotted
          over an interactive map. MarineRoute JS makes it easy to simulate
          maritime journeys between ports — no complex setup, just intuitive
          geospatial logic at your fingertips.
        </p>
        <div className="flex flex-row gap-4  mt-10">
          <RedirectLink text="Check Routes" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}

      <IntroSection />
      <NpmSection />
      <ApiSection />
      <MapSection />
    </>
  );
}

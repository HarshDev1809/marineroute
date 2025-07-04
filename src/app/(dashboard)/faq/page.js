"use client";

import { SectionPagination } from "@/components/SectionPagination";
import { FAQ_SECTIONS } from "@/utils/constants";
import { useState } from "react";
import SectionMenu from "@/components/SectionMenu";
import ApiFAQSection from "@/components/ApiSections/ApiFAQSection";
import NpmPackageFAQSection from "@/components/PackageSections/NpmPackageFAQSection";

function Documentaion({ currentSection, setCurrentSection }) {
  const renderSection = (currentSection) => {
    console.log(currentSection)
    switch (currentSection) {
      case "api":
        return <ApiFAQSection />;
      case "npm_package":
        return <NpmPackageFAQSection />;
      default:
        return <ApiFAQSection />;
    }
  };
  return (
    <section
      id={currentSection}
      className=" justify-center px-3 flex-col w-3/5 gap-2"
    >
      {renderSection(currentSection)}
      <SectionPagination
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sections={FAQ_SECTIONS}
      />
    </section>
  );
}

export default function FaqPage() {
  const [currentSection, setCurrentSection] = useState("api");
  return (
    <div className="flex flex-row px-12 ">
      <SectionMenu
        sections={FAQ_SECTIONS}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Documentaion
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
}

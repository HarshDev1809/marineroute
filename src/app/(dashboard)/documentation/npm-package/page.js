"use client";

import { SectionPagination } from "@/components/SectionPagination";
import { NPM_SECTIONS } from "@/utils/constants";
import { useState } from "react";
import TroubleshootingSection from "@/components/PackageSections/TroubleshootingSection";
import Overview from "@/components/PackageSections/Overview";
import InstallationSection from "@/components/PackageSections/InstallationSection";
import UsageSection from "@/components/PackageSections/UsageSection";
import ProblemsSection from "@/components/PackageSections/ProblemsSection";
import UpcomingUpdatesSection from "@/components/PackageSections/UpcomingUpdatesSection";
import NewUpdatesSection from "@/components/PackageSections/NewUpdatesSection";
import SectionMenu from "@/components/SectionMenu";

function Documentaion({ currentSection, setCurrentSection }) {
  const renderSection = (currentSection) => {
    switch (currentSection) {
      case "overview":
        return <Overview />;
      case "installation":
        return <InstallationSection />;

      case "usage":
        return <UsageSection />;
      case "problems":
        return <ProblemsSection />;

      case "coming_updates":
        return <UpcomingUpdatesSection />;
      case "troubleshoot":
        return <TroubleshootingSection />;

      case "new_updates":
        return <NewUpdatesSection />;
      default:
        return <Overview />;
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
        sections={NPM_SECTIONS}
      />
    </section>
  );
}

export default function NpmDocumentationPage() {
  const [currentSection, setCurrentSection] = useState("overview");
  return (
    <div className="flex flex-row px-12 ">
      <SectionMenu
        sections={NPM_SECTIONS}
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

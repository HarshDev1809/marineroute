"use client";

import { SectionPagination } from "@/components/SectionPagination";
import { API_SECTIONS, NPM_SECTIONS } from "@/utils/constants";
import { useState } from "react";
import SectionMenu from "@/components/SectionMenu";
import ApiOverview from "@/components/ApiSections/ApiOverview";
import ApiUsageSection from "@/components/ApiSections/ApiUsageSection";
import APIEndpointsSection from "@/components/ApiSections/APIEndpointsSection";
import ApiProblemSection from "@/components/ApiSections/ApiProblemSection";
import NewAPIUpdatesSection from "@/components/ApiSections/NewAPIUpdatesSection";
import UpcomingAPIUpdatesSection from "@/components/ApiSections/UpcomingAPIUpdatesSection";
import TroubleshootingAPISection from "@/components/ApiSections/TroubleshootingAPISection";

function Documentaion({ currentSection, setCurrentSection }) {
  const renderSection = (currentSection) => {
    switch (currentSection) {
      case "overview":
        return <ApiOverview />;
      case "end_points":
        return <APIEndpointsSection />;
      case "usage":
        return <ApiUsageSection />;
      case "problems":
        return <ApiProblemSection />;
      case "coming_updates":
        return <UpcomingAPIUpdatesSection />;
      case "troubleshoot":
        return <TroubleshootingAPISection />;
      case "new_updates":
        return <NewAPIUpdatesSection />;
      default:
        return <ApiOverview />;
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
        sections={API_SECTIONS}
      />
    </section>
  );
}

export default function ApiDocumentationPage() {
  const [currentSection, setCurrentSection] = useState("overview");
  return (
    <div className="flex flex-row px-12 ">
      <SectionMenu
        sections={API_SECTIONS}
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

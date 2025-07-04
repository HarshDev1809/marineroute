export default function SectionMenu({ sections = null, currentSection, setCurrentSection }) {
  if (!sections) {
    return;
  }

  return (
    <aside className="w-1/5 h-full sticky top-15">
      <h2 className="text-xl text-gray-400">
        <b>Documentation</b>
      </h2>
      <ul className="ml-2 flex flex-col">
        {Object.entries(sections).map(([sectionId, section], index) => (
          <li
            key={index}
            className={`${
              currentSection === sectionId
                ? "border-black border-l-2 text-gray-700"
                : "border-l border-gray-300 text-gray-400"
            }  flex-row gap-1 pl-2 py-1 flex   cursor-pointer`}
            onClick={() => setCurrentSection(sectionId)}
          >
            {/* { currentSection === sectionId && <div className="border-2 border-gray-300 rounded" />} */}
            {section}
          </li>
        ))}
      </ul>
    </aside>
  );
}
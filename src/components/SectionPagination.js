import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export function SectionPagination({
  sections,
  currentSection,
  setCurrentSection,
}) {
  const sectionIds = Object.keys(sections);
  const currentIndex = sectionIds.indexOf(currentSection);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sectionIds.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentSection(sectionIds[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentSection(sectionIds[currentIndex + 1]);
    }
  };

  return (
    <div className="flex justify-between items-center mt-6 py-10 text-base text-gray-600">
      {/* Previous Button */}
      {hasPrev ? (
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-4 py-2 rounded cursor-pointer "
        >
          <IoIosArrowBack className="text-lg" />
          {sections[sectionIds[currentIndex - 1]]}
        </button>
      ) : (
        <div /> // empty div to preserve space
      )}

      {/* Next Button */}
      {hasNext ? (
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 rounded cursor-pointer "
        >
          {sections[sectionIds[currentIndex + 1]]}
          <IoIosArrowForward className="text-lg" />
        </button>
      ) : (
        <div /> // empty div to preserve space
      )}
    </div>
  );
}

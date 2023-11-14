"use client";
import React, { useState } from "react";
import jsonData from "@@/./docs.json";

interface SubSection {
  name: string;
  desc?: string;
  subs?: SubSection[];
}

interface Section {
  name: string;
  desc: string;
  subs?: SubSection[];
}

const Sidebar: React.FC<{
  sections: Section[];
  onSelect: (sectionIndex: number, subSectionIndex?: number) => void;
}> = ({ sections, onSelect }) => {
  const renderSection = (section: Section, sectionIndex: number) => (
    <div className="w-64">
      <li
        key={sectionIndex}
        className="cursor-pointer border border-white border-dashed hover:border-primary rounded-xl p-3"
        onClick={() => onSelect(sectionIndex)}
      >
        <p className="font-bold text-primary">{section.name}</p>
        {section.subs && section.subs.length > 0 && (
          <ul>
            {section.subs.map((sub, subIndex) => (
              <li
                key={subIndex}
                className="text-sm cursor-pointer ml-5"
                onClick={() => onSelect(sectionIndex, subIndex)}
              >
                {sub.name}
              </li>
            ))}
          </ul>
        )}
      </li>
    </div>
  );

  return <ul>{sections.map(renderSection)}</ul>;
};
const DocumentationPage: React.FC = () => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);
  const [selectedSubSectionIndex, setSelectedSubSectionIndex] =
    useState<number>(0);

  const DocumentationSection: React.FC<{
    section: Section;
    subSectionIndex: number;
  }> = ({ section, subSectionIndex }) => {
    const subs = section.subs && section.subs.length > 0 ? section.subs : [];
    const currentSubSection = subs[subSectionIndex];

    const handleNext = () => {
      if (subSectionIndex < subs.length - 1) {
        setSelectedSubSectionIndex((prevIndex) => prevIndex + 1);
      } else {
        // Go to the next section if available
        setSelectedSectionIndex((prevIndex) =>
          Math.min(prevIndex + 1, jsonData.length - 1)
        );
        setSelectedSubSectionIndex(0);
      }
    };

    const handlePrevious = () => {
      if (subSectionIndex > 0) {
        setSelectedSubSectionIndex((prevIndex) => prevIndex - 1);
      } else {
        // Go to the previous section if available
        setSelectedSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setSelectedSubSectionIndex(0);
      }
    };

    return (
      <div className="ml-4 px-20 pb-10">
        <h2 className="text-[40px] text-primary font-bold mb-2">
          {section.name}
        </h2>
        <p className="mb-4">{section.desc}</p>
        {subs.length > 0 && (
          <div>
            <div className="mb-5"><strong className="text-lg font-bold">
              {currentSubSection.name}
            </strong>
            {currentSubSection.desc && <p>{currentSubSection.desc}</p>}
            <hr className="border-black my-1" /></div>
            {currentSubSection?.subs?.map((sub, index) => (
              <div key={index}>
                <strong className="font-semibold flex items-center gap-1 mt-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" className="fill-primary h-3" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>{sub.name}</strong>
                {sub.desc && <p>{sub.desc}</p>}
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevious}
                disabled={subSectionIndex === 0 && selectedSectionIndex === 0}
                className="bg-primary text-white px-4 py-2 rounded-xl disabled:opacity-50 mr-2"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={
                  subSectionIndex === subs.length - 1 &&
                  selectedSectionIndex === jsonData.length - 1
                }
                className="bg-primary text-white px-4 py-2 rounded-xl disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleSidebarSelect = (
    sectionIndex: number,
    subSectionIndex?: number
  ) => {
    setSelectedSectionIndex(sectionIndex);
    setSelectedSubSectionIndex(subSectionIndex || 0);
  };

  return (
    <div className="flex px-20 py-10">
      <Sidebar sections={jsonData} onSelect={handleSidebarSelect} />
      <DocumentationSection
        section={jsonData[selectedSectionIndex]}
        subSectionIndex={selectedSubSectionIndex}
      />
    </div>
  );
};

export default DocumentationPage;

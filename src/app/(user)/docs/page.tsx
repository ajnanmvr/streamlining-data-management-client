"use client"
import React, { useState } from 'react';
import jsonData from '@@/./docs.json';

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

const Sidebar: React.FC<{ sections: Section[]; onSelect: (sectionIndex: number, subSectionIndex?: number) => void }> = ({ sections, onSelect }) => {
  const renderSection = (section: Section, sectionIndex: number) => (
    <li
      key={sectionIndex}
      className="cursor-pointer hover:bg-gray-100 p-2"
      onClick={() => onSelect(sectionIndex)}
    >
      {section.name}
      {section.subs && section.subs.length > 0 && (
        <ul>
          {section.subs.map((sub, subIndex) => (
            <li
              key={subIndex}
              className="cursor-pointer hover:bg-gray-100 p-2"
              onClick={() => onSelect(sectionIndex, subIndex)}
            >
              {sub.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return <ul className="bg-gray-200">{sections.map(renderSection)}</ul>;
};

const DocumentationPage: React.FC = () => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);
  const [selectedSubSectionIndex, setSelectedSubSectionIndex] = useState<number>(0);

  const DocumentationSection: React.FC<{ section: Section }> = ({ section }) => {
    const subs = section.subs && section.subs.length > 0 ? section.subs : [];
    const currentSubSection = subs[selectedSubSectionIndex];

    const handleNext = () => {
      if (selectedSubSectionIndex < subs.length - 1) {
        setSelectedSubSectionIndex((prevIndex) => prevIndex + 1);
      }
    };

    const handlePrevious = () => {
      if (selectedSubSectionIndex > 0) {
        setSelectedSubSectionIndex((prevIndex) => prevIndex - 1);
      }
    };

    return (
      <div className="ml-4">
        <h2 className="text-2xl font-bold mb-2">{section.name}</h2>
        {section.desc && <p className="mb-4">{section.desc}</p>}
        {subs.length > 0 && (
          <div>
            <strong className="text-lg font-semibold">{currentSubSection.name}</strong>
            {currentSubSection.desc && <p>{currentSubSection.desc}</p>}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevious}
                disabled={selectedSubSectionIndex === 0}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 mr-2"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={selectedSubSectionIndex === subs.length - 1}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleSidebarSelect = (sectionIndex: number, subSectionIndex?: number) => {
    setSelectedSectionIndex(sectionIndex);
    setSelectedSubSectionIndex(subSectionIndex || 0);
  };

  return (
    <div className="flex">
      <Sidebar sections={jsonData} onSelect={handleSidebarSelect} />
      <DocumentationSection section={jsonData[selectedSectionIndex]} />
    </div>
  );
};

export default DocumentationPage;

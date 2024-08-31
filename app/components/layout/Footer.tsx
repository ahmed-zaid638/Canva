"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import footerData from "../../../data/layout/footer.json";

type FooterSection = {
  title: string;
  links: { text: string; url: string }[];
};

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="py-8 p-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center md:block cursor-pointer"
                onClick={() => toggleSection(`section${index + 1}`)}
              >
                <h3 className="text-xl font-bold">{section.title}</h3>
                <button className="md:hidden">
                  {openSections[`section${index + 1}`] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              <ul
                className={`${
                  openSections[`section${index + 1}`] ? "block" : "hidden"
                } md:block mt-4 space-y-2`}
              >
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="hover:underline hover:text-main-light"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

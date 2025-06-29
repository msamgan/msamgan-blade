import React from "react";
import { ArrowUpRight } from "lucide-react";

import msamgan from "../../images/msamgan.jpeg";
import github from "../../images/github.png";
import x from "../../images/x.png";
import linkedin from "../../images/linkedin.png";
import youtube from "../../images/youtube.png";
import star from "../../images/star.png";

const PersonalData = () => {
  const socialLinks = [
    { src: youtube, href: "https://www.youtube.com/@FellowDeveloper" },
    { src: github, href: "https://github.com/msamgan" },
    { src: linkedin, href: "https://www.linkedin.com/in/mohd-samgan-khan/" },
    { src: x, href: "https://x.com/msamgan" },
  ];

  const highlights = [
    "As a seasoned Software Engineer with over 9 years of experience, I have consistently delivered robust software solutions from conception to deployment.",
    "I excel in translating business requirements into effective technical solutions, ensuring seamless integration and functionality.",
  ];

  return (
    <section className="py-20 bg-gray-100 text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-12">
          I’m Mohammed Samgan Khan
        </h1>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <p className="text-gray-700 text-base leading-relaxed">
              My proficiency spans various programming languages and
              frameworks, enabling me to adapt to diverse project needs. With a
              strong focus on quality and performance, I have a proven ability
              to solve challenging problems and drive projects to successful
              completion, contributing to the achievement of business goals.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.src}
                    alt="icon"
                    className="w-6 h-6 hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0">
            <img
              src={msamgan}
              alt="Mohammed Samgan Khan"
              className="w-64 sm:w-72 h-[400px] object-cover rounded-3xl border-4 border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8">
            {/* Resume Button */}
            <div className="flex justify-start lg:justify-end">
              <button className="w-24 h-24 bg-red-600 text-white rounded-2xl flex flex-col items-center justify-center shadow-md hover:bg-red-700 transition">
                <ArrowUpRight className="w-6 h-6" />
                <span className="text-sm">Resume</span>
              </button>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src={star} alt="highlight" className="w-4 h-4 mt-1" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;

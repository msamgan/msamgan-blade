import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Server,
  Database,
  FileText,
  Wrench,
  ClipboardList,
  Settings,
} from "lucide-react";

const specialties = [
  {
    title: "Web Development",
    icon: <Globe className="text-red-500 w-6 h-6" />,
    description:
      "I build responsive, user-friendly web applications with expertise in front-end and back-end development for seamless integration.",
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="text-green-500 w-6 h-6" />,
    description:
      "I develop robust mobile apps across platforms, delivering exceptional user experiences and aligning with business goals.",
  },
  {
    title: "API Development",
    icon: <Server className="text-blue-500 w-6 h-6" />,
    description:
      "I design secure, scalable APIs for seamless communication, optimizing performance and functionality with expert precision.",
  },
  {
    title: "Database Design",
    icon: <Database className="text-purple-500 w-6 h-6" />,
    description:
      "I design scalable, efficient databases with expertise in modeling, normalization, and optimization for robustness and reliability.",
  },
  {
    title: "Code Review",
    icon: <FileText className="text-yellow-500 w-6 h-6" />,
    description:
      "I conduct thorough code reviews, ensuring clean, efficient, maintainable code, enhancing overall software quality.",
  },
  {
    title: "Technical Consulting",
    icon: <Wrench className="text-red-500 w-6 h-6" />,
    description:
      "I offer technical consulting, advising on strategy, architecture, and planning to help businesses overcome software challenges.",
  },
  {
    title: "Project Management",
    icon: <ClipboardList className="text-green-600 w-6 h-6" />,
    description:
      "I manage software projects, ensuring timely, on-budget delivery with expertise in planning, resource allocation, risk, and quality.",
  },
  {
    title: "Software Architecture",
    icon: <Settings className="text-blue-400 w-6 h-6" />,
    description:
      "I design scalable, maintainable software architectures, ensuring robust and flexible systems for long-term application success.",
  },
];

const Specialties = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
          My Specialties
        </h2>

        <div className="space-y-4">
          {specialties.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white shadow-md"
                  : "hover:bg-white/70"
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 w-full sm:w-1/3">
                <div>{item.icon}</div>
                <h3
                  className={`text-lg font-semibold ${
                    index === activeIndex ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 w-full sm:w-2/3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

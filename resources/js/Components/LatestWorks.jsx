import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import laravel from "../../images/laravel.png";

const projects = [
  {
    title: "Laravel Actions Aka Lact",
    description: "Connecting JS-based frontend with Laravel backend",
    image: laravel,
  },
  {
    title: "Laravel RESTful APIs",
    description: "Building scalable backend APIs for mobile/web apps",
    image: laravel,
  },
  {
    title: "Laravel Multi-auth System",
    description: "Role-based authentication for admin and users",
    image: laravel,
  },
];

const LatestWorks = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="w-[90%] max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Latest Works
          </h2>
          <ArrowRight className="w-7 h-7 text-red-600 mt-1" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-4 shadow-md transition hover:-translate-y-1 duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-2xl"
                />

                <button className="absolute bottom-3 right-3 w-14 h-14 bg-black text-white rounded-full border border-white flex items-center justify-center shadow-lg hover:scale-105 transition duration-300">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* Title and Description */}
              <div className="mt-6 px-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-16 flex justify-center space-x-4">
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md hover:bg-red-700 transition">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;

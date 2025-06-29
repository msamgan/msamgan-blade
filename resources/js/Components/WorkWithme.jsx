import React from "react";
import { ArrowUpRight } from "lucide-react";

const WorkWithMe = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-20 text-center">
      <div className="max-w-3xl mx-auto w-[90%] px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6">
          Do you have a Project Idea?
          <br />
          Let's discuss your project!
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available,
          <br className="hidden sm:block" />
          but the majority have suffered alteration.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all duration-300 shadow-md">
          Let’s Work Together <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default WorkWithMe;

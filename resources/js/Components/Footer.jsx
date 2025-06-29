import React from "react";
import { ArrowUpRight } from "lucide-react";
import msamgan from "../../images/msamgan.jpeg";

const Footer = () => {
  return (
    <footer className="relative bg-[#1e1e1e] text-white pt-28">
      {/* Call-to-Action Card */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-red-600 text-white rounded-xl px-6 py-8 shadow-[0_30px_60px_-15px_rgba(255,60,0,0.5)] flex flex-col md:flex-row justify-between items-center gap-6 z-10">
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let’s discuss your <span className="text-white">Project</span>
          </h2>
          <p className="text-sm md:text-base text-white/90">
            Tell me about your ideas to help me bring them to life.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2">
          Contact Mohammed Samgan <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={msamgan} alt="msamgan" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-base font-medium">msamgan</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
          {["Home", "Portfolio", "Services", "Blogs", "Resume"].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-white transition">
              {item}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-gray-400 text-center md:text-right">
          &copy; 2025 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

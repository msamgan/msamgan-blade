import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import openAi from "../../images/openAi.png";
import dropbox from "../../images/dropbox.png";
import webflow from "../../images/webflow.png";
import marvel from "../../images/marvel.png";
import msamgan from "../../images/msamgan.jpeg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Portfolio", "Services", "Blogs", "Resume"];
  const logos = [dropbox, openAi, webflow, marvel, dropbox, openAi, dropbox];

  return (
    <header className="bg-gray-100 w-full">
      {/* Top Navigation */}
      <nav className="w-full max-w-5xl mx-auto mt-4 bg-white py-4 px-4 md:px-8 rounded-lg shadow flex items-center justify-between">
        {/* Logo + Links */}
        <div className="flex items-center gap-6">
          <img
            src={msamgan}
            alt="avatar"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
            {navLinks.map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition ${
                  item === "Home"
                    ? "text-red-600 font-semibold"
                    : "hover:text-red-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA + Menu Icon */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition items-center gap-2">
            <span>Book A Call</span>
            <ArrowUpRight size={18} />
          </button>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-5xl mx-auto mt-2 bg-white py-4 px-4 rounded-lg shadow">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            {navLinks.map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  item === "Home" ? "text-red-600 font-semibold" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center gap-2">
            <span>Book A Call</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}

      {/* Logo Strip */}
      <div className="w-full max-w-5xl mx-auto mt-4 bg-white py-6 px-4 md:px-8 rounded-lg shadow flex flex-wrap justify-center md:justify-between items-center gap-6">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo ${i}`}
            className="h-6 object-contain hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </header>
  );
};

export default NavBar;

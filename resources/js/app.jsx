import React from "react";
import ReactDOM from "react-dom/client";
import '../css/app.css';

import NavBar from "./Components/Navbar.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import Achievement from "./Components/Acheivment.jsx";
import LatestWorks from "./Components/LatestWorks.jsx";
import Specialties from "./Components/Specialites.jsx";
import WorkWithMe from "./Components/WorkWithme.jsx";
import LatestBlogs from "./Components/LatestBlog.jsx";
import LearnWithMe from "./Components/LearnWithMe.jsx";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("navbar-root")).render(
  <React.StrictMode>
    <NavBar/>
    <PersonalData/>
    <Achievement/>
    <LatestWorks/>
    <Specialties/>
    <WorkWithMe/>
    <LatestBlogs/>
    <LearnWithMe/>
    <Footer/>
  </React.StrictMode>
);

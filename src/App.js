import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Languages from "./components/Languages";  
import TrainingCourses from "./components/TrainingCourses";
import Academics from './components/Academics';
import Contact from "./components/Contact";
import CertificateDetails from "./components/CertificateDetails";
import "./App.css";

function PortfolioContent() {
  return (
    <>
      <About />
      <Skills />
      <TrainingCourses />
      <Academics />    
      <Languages />
      <Contact />
    </>
  );
}

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      setTimeout(() => {
        document.getElementById("details-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <section className="hero">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/image01.jpg`}
              alt="NADA"
              className="hero-image"
            />
            <h1>Varshith Pericharla's Portfolio</h1>
            <div
              className={`arrow ${showDetails ? "up" : ""}`}
              onClick={toggleDetails}
              aria-label={showDetails ? "Hide portfolio details" : "Show portfolio details"}
            ></div>
          </div>
        </section>

        {/* Routing */}
        <Routes>
          {/* Main Portfolio page with toggle detail sections */}
          <Route
            path="/"
            element={
              <>
                {showDetails && <div id="details-section"><PortfolioContent /></div>}
                <footer>
                  <p>© 2025 VARSHITH_PERICHARLA</p>
                </footer>
              </>
            }
          />
          {/* Certificate detail page */}
          <Route path="/certificate/:certId" element={<CertificateDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

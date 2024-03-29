import "./styles.css";
import About from "./components/skills";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
      <main className="container mt-5"></main>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Service from "./components/Pages/Service";
import Singleservice from "./components/Pages/Singleservice";
import About from "./components/Pages/About";
import Career from "./components/Pages/Career";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Service/:id" element={<Singleservice />} />
          <Route path="/About" element={<About />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

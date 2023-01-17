import "flowbite";
import "flowbite-react";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Teampage from "./Pages/TeamPage";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import Switcher from "./components/Switcher";
function App() {
  return (
    <div>
      <Nav />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/team" element={<Teampage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

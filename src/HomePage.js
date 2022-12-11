// import logo from "./logo.svg";
import "./App.css";
import "flowbite";
import "flowbite-react";
import Footer from "./Footer";
import Hero from "./Hero";

import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Homepage;

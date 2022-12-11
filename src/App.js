// import logo from "./logo.svg";
import "./App.css";
import "flowbite";
import "flowbite-react";
import Footer from "./Footer";
import A from "./Modal";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/team" element={<Footer />}></Route>
        <Route path="/contact" element={<Navbar/>}></Route>
        <Route path="/about" element={<A/>}></Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

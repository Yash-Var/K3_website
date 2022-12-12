import "flowbite";
import "flowbite-react";
import Footer from "./Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Teampage from "./Pages/TeamPage";
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/team" element={<Teampage />}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

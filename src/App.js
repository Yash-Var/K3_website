import "flowbite";
import "flowbite-react";
import Footer from "./Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from './Pages/ContactPage'
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/team" element={<ContactPage />}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/about" element={<ContactPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

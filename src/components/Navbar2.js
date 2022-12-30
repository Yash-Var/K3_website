import "flowbite";
import { Navbar, Button,DarkThemeToggle,Flowbite } from "flowbite-react";
import DarkMode from "./DarkMode";

import Image_logo from '../static/logo1.png';
import Switcher from "./Switcher";
const Navbar2 = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="dark:bg-gray-900">
        <Navbar.Brand href="">
          <img
             src={Image_logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Kiet Koders Korner
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <Switcher />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" >
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/team">Team</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbar2;

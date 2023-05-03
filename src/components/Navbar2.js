import "flowbite";
import { Navbar, Button, DarkThemeToggle, Flowbite } from "flowbite-react";
import DarkMode from "./DarkMode";

import Image_logo from "../static/logo1.png";
import Switcher from "./Switcher";
const Navbar2 = () => {
  return (
    <div className="p-5 ">
      <Navbar fluid={true} rounded={true} className="dark:bg-gray-900 ">
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
          <Switcher className="bg-purple-400" />
          <Navbar.Toggle className="bg-purple-900 hover:bg-purple-400" />
        </div>
        <Navbar.Collapse className="text-lg">
          <Navbar.Link href="/" className="text-lg hover:underline ">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-lg">
            About
          </Navbar.Link>
          <Navbar.Link href="/team" className="text-lg">
            Team
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-lg">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;

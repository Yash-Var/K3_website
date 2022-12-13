import { useState, useEffect } from "react";
import { Flowbite, DarkThemeToggle} from "flowbite-react";
const DarkMode = () => {
  return (
    <>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
    </>
  );
};

export default DarkMode;

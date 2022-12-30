import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./UsedarkSide";


export default function Switcher() {

const [colorTheme, setTheme] = useDarkSide();

const [darkSide, setDarkSide] = useState(
colorTheme === "light" ? true : false
);

const toggleDarkMode = (checked) => {

setTheme(colorTheme);
setDarkSide(checked);
};

return (
<>

<DarkModeSwitch
checked={darkSide}
onChange={toggleDarkMode}
size={30}
/>
</>
);
}
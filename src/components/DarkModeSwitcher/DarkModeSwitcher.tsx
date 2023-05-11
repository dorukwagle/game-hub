import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./hooks/useDarkSide";

const DarkModeSwitcher = () => {
    const { colorTheme, setTheme } = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    );
};

export default DarkModeSwitcher;

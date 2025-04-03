import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        const element = document.documentElement;  // Move inside useEffect
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;

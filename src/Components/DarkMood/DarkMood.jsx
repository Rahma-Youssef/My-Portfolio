

import { Icon } from "@iconify-icon/react";
import { useState, useEffect } from "react";

function DarkMood() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="flex items-center justify-center transition-colors duration-300 ">
      <button
        onClick={toggleDarkMode}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center dark:text-gray-900 cursor-pointer relative"
      >
 
        <Icon
          icon="mage:light-bulb"
          width="34"
          height="34"
          className={`absolute transition-all duration-700 ${
            darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -translate-y-4 scale-75"
          }`}
          style={{ color: "#fff7f7" }}
        />

  
        <Icon
          icon="cuida:lamp-outline"
          width="34"
          height="34"
          className={`absolute transition-all duration-700 ${
            darkMode ? "opacity-0 translate-y-4 scale-75" : "opacity-100 rotate-0 scale-100"
          }`}
        />
      </button>
    </div>
  );
}

export default DarkMood;

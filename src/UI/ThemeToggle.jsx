import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className=" px-4 py-2 rounded">
      {isDarkMode ? (
        <HiOutlineSun className="icon" />
      ) : (
        <HiOutlineMoon className="icon" />
      )}
    </button>
  );
}

export default ThemeToggle;

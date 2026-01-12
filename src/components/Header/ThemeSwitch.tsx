import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

interface ThemeSwitchProps {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={handleThemeSwitch}
      className="flex justify-center items-center ml-2 h-10 w-10 rounded-full hover:bg-black/[0.2] dark:hover:bg-[#303030]/[0.6]"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode className="text-white text-xl cursor-pointer" />
      ) : (
        <MdDarkMode className="text-[#3a5171] text-xl cursor-pointer" />
      )}
    </div>
  );
};

export default ThemeSwitch;

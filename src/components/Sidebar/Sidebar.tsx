import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import SidebarItem from "./SidebarItem";
import { categories } from "../../utils/constants";
import { DataContext } from "../../context/ApiContext";
import type { DataContextType } from "../../types";

const Sidebar: React.FC = () => {
  const { mobileMenu, selectedCategory, setSelectedCategory, theme, setTheme } =
    useContext(DataContext) as DataContextType;
  const navigate = useNavigate();

  const clickHandler = (name: string, type: string) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <aside
      className={`w-[220px] md:block overflow-y-auto h-full py-2 bg-[#0f0f0f] md:bg-white dark:bg-[#0f0f0f] absolute md:relative z-10 transition-transform duration-200 md:translate-x-0 scrollbar-thin scrollbar-thumb-gray-600 ${
        mobileMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="md:hidden flex justify-center mb-3 px-3">
        <button
          onClick={handleThemeSwitch}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium"
        >
          {theme === "dark" ? (
            <>
              <MdOutlineLightMode className="text-lg" />
              Light Mode
            </>
          ) : (
            <>
              <MdDarkMode className="text-lg" />
              Dark Mode
            </>
          )}
        </button>
      </div>

      <div className="flex px-3 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <SidebarItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name
                    ? "bg-white/10 md:bg-gray-100 dark:bg-white/10 font-semibold"
                    : ""
                }`}
              />
              {item.divider && (
                <hr className="my-3 border-white/10 md:border-gray-200 dark:border-white/10" />
              )}
            </div>
          );
        })}
        <hr className="my-3 border-white/10 md:border-gray-200 dark:border-white/10" />
        <p className="text-white/40 md:text-gray-500 dark:text-white/40 text-xs px-3 py-2">
          © {new Date().getFullYear()} Streamwave
        </p>
        <p className="text-white/30 md:text-gray-400 dark:text-white/30 text-[10px] px-3">
          Built by Saket Kothari
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

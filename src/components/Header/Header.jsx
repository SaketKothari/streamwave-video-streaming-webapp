import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { MdLiveTv } from "react-icons/md";

import { DataContext } from "../../context/ApiContext";
import Loader from "../../shared/Loader";
import useOnline from "../../utils/useOnline";

import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import OnlineStatus from "./OnlineStatus";
import SearchInput from "./SearchInput";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const isOnline = useOnline();
  const { loading, mobileMenu, setMobileMenu, theme, setTheme } =
    useContext(DataContext);

  // extracting the name of the current page or route from the URL path
  // Ex if the URL path is "/products/shoes," pageName would be "products."
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <header className="flex h-14 px-2 md:px-4 items-center justify-between sticky top-0 z-20 bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-transparent">
      {loading && <Loader />}

      <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
        {pageName !== "video" && (
          <MobileMenuButton
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <Logo />
      </div>

      <div className="relative flex items-center">
        <SearchInput />
      </div>

      <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
        <div className="hidden md:flex items-center">
          <Link
            to="/live"
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#272727] rounded-full transition-colors"
          >
            <MdLiveTv className="text-red-500 text-lg" />
            <span>Live</span>
          </Link>
          <OnlineStatus isOnline={isOnline} />
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>

        <div className="flex items-center ml-1 md:ml-2">
          <UserButton signOutUrl="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;

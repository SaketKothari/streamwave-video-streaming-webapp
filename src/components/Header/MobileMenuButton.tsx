import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";

interface MobileMenuButtonProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  mobileMenu,
  setMobileMenu,
}) => {
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div
      onClick={mobileMenuToggle}
      className="flex h-10 w-10 justify-center items-center rounded-full md:hidden md:mr-6 cursor-pointer hover:bg-[#303030]/[0.6]"
    >
      {mobileMenu ? (
        <CgClose className="text-black dark:text-white text-xl" />
      ) : (
        <SlMenu className="text-black dark:text-white text-xl" />
      )}
    </div>
  );
};

export default MobileMenuButton;

interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
  action: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  className,
  action,
}) => {
  return (
    <div
      className={
        "flex items-center h-10 px-3 gap-6 text-white md:text-gray-800 dark:text-white text-sm cursor-pointer rounded-xl hover:bg-white/10 md:hover:bg-gray-100 dark:hover:bg-white/10 transition-colors " +
        className
      }
      onClick={action}
    >
      <span className="text-xl flex-shrink-0">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
};

export default SidebarItem;

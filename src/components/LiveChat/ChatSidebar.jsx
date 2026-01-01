import { IoSearch } from "react-icons/io5";

const ChatSidebar = () => {
  return (
    <div className="fixed right-full top-14 z-10 h-[calc(100%-56px)] w-full bg-white dark:bg-[#0f0f0f] transition-transform duration-300 ease-in-out peer-focus:translate-x-full md:static md:block md:w-[30%] md:border-r border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 p-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex-1 flex items-center gap-2 bg-gray-100 dark:bg-[#272727] rounded-full px-4 py-2">
          <IoSearch className="h-4 w-4 text-gray-500" />
          <input
            placeholder="Search chat..."
            className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      <ul className="h-[calc(100%-57px)] overflow-y-auto">
        <li className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800">
          <img
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV7iH2pAv3DtP9WGGXac_Y07mDVoduYXXMVjNHWNf-zfjn2I-ipiqY2CDonDrw6KPt3w&usqp=CAU"
            alt="avatar"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Kevin Malone
              </p>
              <p className="text-xs text-gray-500">2h ago</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate mt-0.5">
              I can't keep doing this forever. It's been 20 seconds.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800">
          <img
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0WNgYDBHtvIoazRrA4sQzRtRZpohLrL80g&usqp=CAU"
            alt="avatar"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Michael Scott
              </p>
              <p className="text-xs text-gray-500">Yesterday</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate mt-0.5">
              That's what she said!
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800">
          <img
            className="h-10 w-10 rounded-full object-cover flex-shrink-0"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Jim Halpert
              </p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate mt-0.5">
              Bears. Beets. Battlestar Galactica.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ChatSidebar;

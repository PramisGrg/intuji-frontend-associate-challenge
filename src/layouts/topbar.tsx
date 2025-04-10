import { AlignLeft, ChevronDown } from "lucide-react";
import { ToogleSidebarProps } from "../types/toogle.sidebar.props";
import search from "../assets/icons/search.svg";
import notification from "../assets/icons/notification.svg";
import messageText from "../assets/icons/message-text.svg";

const TopBar = ({ toggleSidebar }: ToogleSidebarProps) => {
  return (
    <header className="bg-background p-4">
      <nav className="grid md:grid-cols-[70%_30%] gap-4 w-full items-center">
        <section className="flex items-center w-full">
          <button
            aria-label="Toggle Sidebar"
            className="mr-4 text-gray-600 lg:hidden"
            onClick={toggleSidebar}
          >
            <AlignLeft />
          </button>

          <div className="flex items-center bg-white gap-2 rounded-full w-full px-4 py-3">
            <img src={search} alt="Search Icon" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-transparent focus:outline-none text-gray-600"
              aria-label="Search"
            />
          </div>
        </section>

        <section className="flex items-center gap-2 bg-white rounded-full px-4 py-1">
          <button
            aria-label="Notifications"
            className="py-2 px-4 rounded-full border border-border transition"
          >
            <img src={notification} alt="Notification Icon" />
          </button>

          <button
            aria-label="Messages"
            className="py-2 px-4 rounded-full border border-border transition"
          >
            <img src={messageText} alt="Message Icon" />
          </button>

          <div className="flex items-center gap-2">
            <figure
              aria-label="User Avatar"
              className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </figure>
            <figcaption className="text-sm text-gray-800 font-medium">
              Mirie Kiritani
            </figcaption>
            <ChevronDown />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default TopBar;

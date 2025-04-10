import { useState } from "react";
import notification from "../assets/icons/notification.svg";
import messageText from "../assets/icons/message-text.svg";
import search from "../assets/icons/search.svg";
import { AlignLeft, ChevronDown } from "lucide-react";
import { ToogleSidebarProps } from "../types/toogle.sidebar.props";

const TopBar = ({ toggleSidebar }: ToogleSidebarProps) => {
  const [rotated, setRotated] = useState(false);

  const handleChevronClick = () => {
    setRotated((prev) => !prev);
  };

  return (
    <header className="p-4">
      <nav className="grid lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 flex">
          <button
            aria-label="Toggle Sidebar"
            className="mr-4 text-neutral-800 md:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <AlignLeft />
          </button>
          <div className="flex items-center bg-white gap-2 rounded-full w-full px-4 py-3 focus-within:ring-2 focus-within:ring-primary">
            <img src={search} alt="Search Icon" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-transparent text-gray-600 focus:outline-none"
              aria-label="Search"
            />
          </div>
        </section>

        <section className="flex gap-2 bg-white justify-between rounded-full px-4 py-1">
          <button
            aria-label="Notifications"
            className="py-2 px-4 rounded-full border border-border cursor-pointer"
          >
            <img src={notification} alt="Notification Icon" />
          </button>

          <button
            aria-label="Messages"
            className="py-2 px-4 rounded-full border border-border cursor-pointer"
          >
            <img src={messageText} alt="Message Icon" />
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <figure className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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
            <figcaption className="font-semibold">Mirie Kiritani</figcaption>
            <ChevronDown
              onClick={handleChevronClick}
              className={`transform transition-transform duration-300 ${
                rotated ? "rotate-180" : null
              }`}
            />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default TopBar;

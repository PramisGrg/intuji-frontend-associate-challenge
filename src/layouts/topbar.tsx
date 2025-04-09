import { AlignLeft } from "lucide-react";
import { ToogleSidebarProps } from "../types/toogle.sidebar.props";

const TopBar = ({ toggleSidebar }: ToogleSidebarProps) => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 px-4 py-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <button
            className="mr-4 text-gray-600 lg:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <AlignLeft />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Finance Dashboard</h1>
        </div>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200">
            <i className="far fa-bell"></i>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200">
            <i className="far fa-comment"></i>
          </button>
          <div className="flex items-center gap-2 ml-2">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
              <i className="far fa-user text-gray-600"></i>
            </div>
            <span className="font-medium hidden md:block">Mirie Kiritani</span>
            <i className="fas fa-chevron-down text-xs text-gray-500"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

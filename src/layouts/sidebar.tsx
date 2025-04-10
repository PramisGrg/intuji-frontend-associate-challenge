import { Fragment } from "react/jsx-runtime";
import Divider from "../components/ui/divider";
import { sidebarData } from "../constants/sidebar-data";
import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "../components/ui/image-placeholder";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(1);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const mainItems = sidebarData.slice(0, 7);
  const bottomItems = sidebarData.slice(7);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={sidebarRef}
      className={`bg-white w-64 border-r border-border fixed lg:static h-full z-30 
                   shadow-lg lg:shadow-none transition-all duration-300 ease-in-out transform ${
                     isOpen
                       ? "translate-x-0 opacity-100"
                       : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100"
                   }`}
    >
      <ImagePlaceholder rounded="md" />

      <nav>
        <ul className="py-2">
          {mainItems.map((item) => (
            <Fragment key={item.id}>
              <li
                onClick={() => setSelectedItem(item.id)}
                className={`px-4 py-4 transition-all duration-200 ease-in-out 
                             ${
                               selectedItem === item.id
                                 ? "border-l-4 border-primary"
                                 : "border-l-4 border-transparent hover:bg-blue-50"
                             }`}
              >
                <a href="#" className="flex space-x-2 items-center">
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </a>
              </li>
              {item.id === 4 && <Divider />}
            </Fragment>
          ))}
        </ul>

        <ul className="py-2">
          {bottomItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className={`px-4 py-4 transition-all duration-200 ease-in-out
                           ${
                             selectedItem === item.id
                               ? "border-l-4 border-primary bg-blue-50"
                               : "border-l-4 border-transparent hover:bg-gray-100"
                           }`}
            >
              <a href="#" className="flex space-x-2 items-center">
                <img src={item.icon} alt="icon" className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

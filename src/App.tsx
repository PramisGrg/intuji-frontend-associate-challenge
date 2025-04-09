import { useState } from "react";
import MainContent from "./layouts/main-content";
import Sidebar from "./layouts/sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <MainContent toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;

import { useState } from "react";

import Sidebar from "./layouts/sidebar";
import MainContent from "./layouts/main-content";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-background relative">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="flex-1 overflow-auto w-full md:ml-64">
        <MainContent toggleSidebar={toggleSidebar} />
      </main>
    </div>
  );
}

export default App;

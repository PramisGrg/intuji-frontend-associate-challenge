import { useState } from "react";
import MainContent from "./layouts/main-content";
import Sidebar from "./layouts/sidebar";
import FinancialDashboard from "./layouts/main-content";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      {/* <MainContent toggleSidebar={toggleSidebar} /> */}
      <FinancialDashboard toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;

import { ToogleSidebarProps } from "../types/toogle.sidebar.props";
import TopBar from "./topbar";

const MainContent = ({ toggleSidebar }: ToogleSidebarProps) => {
  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <TopBar toggleSidebar={toggleSidebar} />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section aria-labelledby="overview-title">
              <h2 id="overview-title" className="text-xl font-bold mb-4">
                Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <BalanceCard />
                <SavingCard />
                <ExpenseCard />
                <IncomeCard /> */}
              </div>
            </section>

            {/* <Analytics /> */}
          </div>

          <div className="space-y-6">
            {/* <SavingPlan />
            <Transactions /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

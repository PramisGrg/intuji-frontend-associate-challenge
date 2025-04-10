import BalanceCard from "../components/cards/balance-cards";
import ExpenseCard from "../components/cards/expense-card";
import IncomeCard from "../components/cards/income-card";
import SavingCard from "../components/cards/saving-card";
import SavingPlan from "../components/saving-plan";
import { ToogleSidebarProps } from "../types/toogle.sidebar.props";
import TopBar from "./topbar";

export default function FinancialDashboard({
  toggleSidebar,
}: ToogleSidebarProps) {
  return (
    <div className="flex flex-col w-full">
      <TopBar toggleSidebar={toggleSidebar} />
      <div className="w-full bg-background p-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BalanceCard />
                <SavingCard />
                <ExpenseCard />
                <IncomeCard />
              </div>
            </div>

            <div className="lg:col-span-1 bg-white rounded-lg p-4 shadow-sm">
              <SavingPlan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

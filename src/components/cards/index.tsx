import BalanceCard from "./balance-cards";
import SavingCard from "./saving-card";
import ExpenseCard from "./expense-card";
import IncomeCard from "./income-card";

const Cards = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceCard />
        <SavingCard />
        <ExpenseCard />
        <IncomeCard />
      </div>
    </div>
  );
};

export default Cards;

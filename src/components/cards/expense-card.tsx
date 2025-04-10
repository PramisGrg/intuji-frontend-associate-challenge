import { ArrowRight } from "lucide-react";
import Divider from "../ui/divider";
import expenseImg from "../../assets/images/cards/direct-up.svg";

const ExpenseCard = () => {
  return (
    <section className="border border-border rounded-lg p-4 space-y-6">
      <header className="flex items-center gap-4">
        <div className="border border-border rounded-full">
          <img src={expenseImg} className="p-2" />
        </div>

        <div>
          <h3>Expenses</h3>
          <span className="inline-flex items-center bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
            2% compared with last month
          </span>
        </div>
      </header>

      <Divider />

      <footer className="flex justify-between items-center pt-4">
        <span className="text-2xl font-bold">$200.31</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:rotate-45" />
      </footer>
    </section>
  );
};

export default ExpenseCard;

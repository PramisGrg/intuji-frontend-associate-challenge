import { ArrowRight } from "lucide-react";
import Divider from "../ui/divider";
import incomeImg from "../../assets/images/cards/direct-down.svg";

const IncomeCard = () => {
  return (
    <section className="group border border-border cursor-pointer rounded-lg p-4 space-y-6">
      <header className="flex items-center gap-4">
        <div className="border border-border rounded-full">
          <img src={incomeImg} className="p-2" />
        </div>

        <div>
          <h3>Incomes</h3>
          <span className="inline-flex items-center bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
            8% compared with last month
          </span>
        </div>
      </header>

      <Divider />

      <footer className="flex justify-between items-center pt-4">
        <span className="text-2xl font-bold">$21,121.0</span>
        <ArrowRight className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:scale-125" />
      </footer>
    </section>
  );
};

export default IncomeCard;

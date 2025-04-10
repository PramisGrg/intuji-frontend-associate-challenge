import { ArrowRight } from "lucide-react";
import Divider from "../ui/divider";
import balance from "../../assets/images/cards/empty-wallet.svg";

const BalanceCard = () => {
  return (
    <section className="bg-primary rounded-lg p-4 space-y-6 text-white">
      <header className="flex items-center gap-4">
        <div className="border border-border rounded-full">
          <img src={balance} className="p-2" />
        </div>

        <div>
          <h3>Your Balance</h3>
          <span className="inline-flex items-center bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs">
            15% compared with last month
          </span>
        </div>
      </header>

      <Divider />

      <footer className="flex justify-between items-center pt-4">
        <span className="text-2xl font-bold">$28,891.138</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:rotate-45" />
      </footer>
    </section>
  );
};

export default BalanceCard;

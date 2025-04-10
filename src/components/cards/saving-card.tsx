import { ArrowRight } from "lucide-react";
import Divider from "../ui/divider";
import savingImg from "../../assets/images/cards/save-2.svg";

const SavingCard = () => {
  return (
    <section className="rounded-lg p-4 space-y-6 border border-border">
      <header className="flex items-center gap-4">
        <div className="border border-border rounded-full">
          <img src={savingImg} className="p-2" />
        </div>

        <div>
          <h3>Saving</h3>
          <span className="inline-flex items-center bg-red-200 text-red-800 px-2 py-0.5 rounded-full text-xs">
            10% compared with last month
          </span>
        </div>
      </header>

      <Divider />

      <footer className="flex justify-between items-center pt-4">
        <span className="text-2xl font-bold">$1,050.44</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:rotate-45" />
      </footer>
    </section>
  );
};

export default SavingCard;

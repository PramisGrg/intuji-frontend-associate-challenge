import TransactionCard from "./transaction-card";
import { transactionsData } from "../../constants/transaction-data";

const Transaction = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recent Transaction</h2>
        <a href="#" className="text-indigo-600 text-sm font-medium">
          See All
        </a>
      </div>

      <TransactionCard transactions={transactionsData} />
    </div>
  );
};

export default Transaction;

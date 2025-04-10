import TransactionCard from "./transaction-card";
import { transactionsData } from "../../constants/transaction-data";
import SectionHeader from "../ui/section-header";

const Transaction = () => {
  return (
    <div>
      <SectionHeader title="Recent Transactions" viewAllLink="#" />

      <div className="space-y-6">
        {transactionsData.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transaction;

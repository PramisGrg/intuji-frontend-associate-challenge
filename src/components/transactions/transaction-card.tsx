import { TTransactionCardResponse } from "../../types/transactions";

const TransactionCard = ({ transactions }: TTransactionCardResponse) => {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src="/api/placeholder/40/40"
                alt={transaction.name}
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-gray-800">{transaction.name}</h3>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-800">${transaction.amount}</p>
            <p className="text-sm text-green-500">{transaction.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;

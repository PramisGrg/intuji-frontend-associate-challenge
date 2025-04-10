import { TTransactionCardResponse } from "../../types/transactions";

const TransactionCard = ({ transaction }: TTransactionCardResponse) => {
  return (
    <section className="space-y-4">
      <article
        key={transaction.id}
        className="flex justify-between items-center"
      >
        <div className="flex items-center">
          <figure className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src={transaction.icon}
              alt={transaction.name}
              className="w-full h-full rounded-full"
            />
          </figure>
          <div className="ml-3">
            <h3 className="font-medium">{transaction.name}</h3>
            <p className="text-sm text-gray-500">{transaction.date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold">${transaction.amount}</p>
          <p className="text-sm text-success">{transaction.status}</p>
        </div>
      </article>
    </section>
  );
};

export default TransactionCard;

const TransactionItem = ({ transaction }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          <i className="far fa-image text-gray-500"></i>
        </div>
        <div>
          <h4 className="font-medium">{transaction.name}</h4>
          <span className="text-xs text-gray-500">{transaction.date}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold">${transaction.amount}</div>
        <div className="text-xs text-green-500">{transaction.status}</div>
      </div>
    </div>
  );
};

export default TransactionItem;

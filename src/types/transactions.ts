export interface TTransactionData {
  id: number;
  name: string;
  date: string;
  amount: number;
  status: string;
  icon: string;
}

export interface TTransactionCardResponse {
  transaction: TTransactionData;
}

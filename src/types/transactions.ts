export interface TTransactionData {
  id: number;
  name: string;
  date: string;
  amount: number;
  status: string;
}

export interface TTransactionCardResponse {
  transactions: TTransactionData[];
}

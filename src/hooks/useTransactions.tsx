// por convencao todo hook comeca com "use"

import { createContext, useState, useEffect, ReactNode, useContext } from 'react';

import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// };

// vai herdar tudo de Transaction, mas vai omitir as propriedades que foram especificadas
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// vai herdar somente as propriedades que foram especificadas
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {
  // o tipo ReactNode aceita qualquer coisa q pode ser incluido no react(JSX, texto, numero, etc)
  children: ReactNode;
};

interface TransactionsContextData {
  transactions: Transaction[];
  // toda async function retorna uma promise, por isso precisa mudar a tipagem
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

// context eh utilizado como se fosse um componente, mas representa o value do context
// createContext recebe o valor default do context
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData // forca a tipagem desse objeto, pois sem isso daria erro
);

// faz isso para nao precisar deixar todo o codigo do context dentro do componente App, que seria a outra maneira de utilizar o context
// props.children recebe todos os elementos que sao filhos desse componente(pode ser um componente, um texto, elemento HTML, etc)
// cria um componente que faz a utilizacao do TransactionsContext
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    // dessa forma q se utiliza o context, somente os elementos filhos do context poderao consumir os seus dados
    // value representa o valor do context quando ele for "renderizado"
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

// um hook sempre pode utilizar outros hooks
// criar um hook serve apenas para tornar o codigo mais organizado
export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
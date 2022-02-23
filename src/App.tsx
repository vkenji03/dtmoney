/**
 * styled components possui muitas vantagens em relacao ao uso do css normal:
 * - suporta encadeamento igual o Sass
 * - a estilizacao fica somente no contexto do componente
 */

import { useState } from 'react';
// biblioteca que ja possui modal com todas as suas funcionalidades
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

// eh mais recomendado usar o export dessa forma ao invez de export default, pois assim dificulta a confusao de componentes ao copiar e colar
export function App() {
  /*
    - nao precisamos utilizar context para compartilhar esse estado pois eh uma informacao simples e faz sentido ele ficar dentro do
      componente App
    - existem duas formas de compartilhar estados, usando context, ou passando esse estado para os filhos do componente(o que foi feito
      nesse caso)
  */
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // quando uma funcao eh executada apos uma acao do usuario, por exemplo ao clicar em algo, digitar, etc, seu nome comeca com "handle"
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      {/* todos os filhos sao passados como props.children para TransactionsProvider */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
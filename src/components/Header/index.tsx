// uma forma interessante de nomear eh usar o nome do arquivo + Img
import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  // quando um componente recebe uma funcao atraves das props, seu nome comeca com "on"
  onOpenNewTransactionModal: () => void;
}

// no header so fica o conteudo que deve ficar se repetindo em todas as pagina da aplicacao
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
/**
 * styled components possui muitas vantagens em relacao ao uso do css normal:
 * - suporta encadeamento igual o Sass
 * - a estilizacao fica somente no contexto do componente
 */

import { GlobalStyle } from './styles/global';

// eh mais recomendado usar o export dessa forma ao invez de export default, pois assim dificulta a confusao de componentes ao copiar e colar
export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <GlobalStyle />
    </div>
  );
}
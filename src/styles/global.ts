import { createGlobalStyle } from 'styled-components';

// sera usado como um componente react
export const GlobalStyle = createGlobalStyle`
  :root {
    // sempre bom analisar o layout e setar essas variaveis com as cores q sao mais recorrentes, nem sempre o designer deixa isso pronto
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  /*
    - a fonte padrao sempre eh 16px, o tamanho ideal para desktop
    - uma boa pratica eh usar a medida rem para o layout, por exemplo em botoes, imagens, icones, etc. Dessa forma, a pagina se torna 
    muito mais responsiva, ja que ao diminuir o tamanho da tela do dispositivo a fonte tambem ira diminuir e com isso todos os
    elementos que possuem como unidade de medida o rem irao se ajustar na nova tela
  */
  html {
    // em dispositivos menores faz sentido que a fonte fique menor
    @media (max-width: 1080px) {
      /*
        uma boa pratica eh usar o font-size como porcentagem porque assim caso o usuario tenha um tamanho de fonte personalizado,
        por exemplo um tamanho maior pois ele nao enxerga tao bem, a porcentagem sera aplicada em cima desse valor perosnalizado,
        ou seja, nesse caso a fonte ficara maior do que 15px, porem todo o site ira se adaptar a isso, dessa forma melhorarando a
        experiencia do usuario. caso use o valor de 15px esse valor sera sempre assim, o que pode levar a uma experiencia de usuario
        ruim por exemplo no caso citado acima
      */
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      forn-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`;
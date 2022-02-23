import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// cria uma fake API, sempre bom usar esse tipo de ferramenta para simular um backend quando o mesmo ainda nao esta pronto
import { createServer, Model } from 'miragejs';


createServer({
  // cria um banco de dados interno
  models: {
    // representa uma tabela do banco de dados
    transaction: Model
  },

  // vai adicionar alguns dados no banco de dados interno
  seeds(server) {
    server.db.loadData({
      // sempre o nome da tabela do model, porem no plural
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00')
        }
      ]
    });
  },

  routes() {
    // todas as chamadas que forem http://localhost:3000/api/... serao interceptadas pelo miragejs
    this.namespace = 'api';

    // toda requisicao do tipo GET para /api/transactions vai executar o callback
    this.get('/transactions', () => this.schema.all('transaction'));

    // schema se refere ao banco de dados interno
    this.post('/transactions', (schema, request) => {
      // request.requestBody sempre vem em formato de string
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
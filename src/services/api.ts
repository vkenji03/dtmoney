// a pasta services tem a ideia de servicos de dados, todos os lugares onde eu posso buscar ou enviar dados ficam aqui
// por exemplo um banco de dados, uma API externa, ou uma funcao que faz uma requisicao ao backend

// o axios acaba sendo mais completo do que o fetch
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});
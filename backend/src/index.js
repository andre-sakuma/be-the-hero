const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*GET: Buscar uma informacao do backend
POST: Criar uma informacao no backend
PUT: Alterar uma informacao no backend
DELETE: Deletar uma informacao no backend*/

/**
 * Tipos de Parametros:
 * 
 * Query Params: parametros nomeados enviados na rota apos o simbolo de interrogacao(Filtros, Paginacao)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


app.listen(3333);


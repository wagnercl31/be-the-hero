// importando funcionalidade do express para variavel express
const express = require ('express');
const routes = require('./routes');
const cors = require('cors');
//criando aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar/cadastrar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * Delete: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Parms: Parâmetros nomeados enviados na rota após o "?" (filtos, paginação)
  * Route Parms: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */





  //ouvir a porta 3333
app.listen(3333);


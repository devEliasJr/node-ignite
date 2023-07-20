import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";


// Query Parameters: URL Stateful => Filtros / paginação, não obrigatórios
// http://localhost:3333/users?userID=1&name=John

// Route Parameters: Identificação de recurso, jamais enviar info. sensiveis
// GET http://localhost:3333/users/1
// POST http://localhost:3333/users/1

// Resquest Body: Enviar de informações de um formulário (protocolo HTTPs)
// Envio a parte pelo body da request a url se mantem


const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333);

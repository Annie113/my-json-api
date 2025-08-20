const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// ultra-light endpoint for keep-alive pings
server.get('/health', (req, res) => res.sendStatus(204));

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON server running on ${port}`);
});

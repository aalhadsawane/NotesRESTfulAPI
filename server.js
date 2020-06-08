const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
//mongodb+srv://node-todo:<password>@node-rest-todo-oxanw.mongodb.net/<dbname>?retryWrites=true&w=majority
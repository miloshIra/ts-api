const http = require('http');
const app = require('./app')

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port);
console.log(`Server running on localhost:${port}`)
console.log(`Debug on or not.. who knows this is js based.`)
console.log(`.....cling ..clang ...... robot sounds!`)
console.log(`------------------------------------------------------`)

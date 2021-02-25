const http = require('http');
const app = require('./server');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, function(err){
    if(!err){

        console.log('Server is Up now');

    }
});

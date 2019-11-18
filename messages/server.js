const http = require('http');
const url = require('url');
const server = http.createServer();

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});

server.on('request', (request, response) => {
  if (request.method === 'GET') {
    getAllMessages(response);
  }

  else if (request.method === 'POST') {
    let newMessage = { 'id': new Date() };

    request.on('data', (data) => {
      newMessage = Object.assign(newMessage, JSON.parse(data));
    });

    request.on('end', () => {
      addMessage(newMessage, response);
    });
  }
});

// What type of information is included in the header of a request ?
// The header contains infomration about the request such as content-type, amoount of data or content-length, and character set

// What are the major RESTful methods and what do each of them do?
//POST - creates new resources on the server based on what is posted
//GET - returns data that is stored on the server
//PUT - creates a new resource using a known endpoint within the request body
//DELETE - removes a resource from the end point by inputting something like an id

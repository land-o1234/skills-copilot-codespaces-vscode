// Create web server
// Create a file called comments.js in the root of your project and write a web server in that file. The server should listen on port 3000 and respond with the following JSON object when it receives a GET request to the path /comments:

// {
//   "comments": [
//     { "id": 1, "author": "author1", "comment": "comment1" },
//     { "id": 2, "author": "author2", "comment": "comment2" }
//   ]
// }
// Note: Do not use any external libraries such as express.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      comments: [
        { id: 1, author: 'author1', comment: 'comment1' },
        { id: 2, author: 'author2', comment: 'comment2' }
      ]
    }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
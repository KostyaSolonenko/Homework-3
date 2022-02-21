const http = require("http");
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = (path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url));
    const extension = path.extname(filePath)
    let fileExtension = "text/html";

    switch (extension) {
        case '.css':
            fileExtension = 'text/css';
            break;
        case '.js':
            fileExtension = 'text/javascript';
            break;
        default:
            fileExtension = "text/html";
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error');
        } else {
            res.setHeader("Content-Type", fileExtension);
            res.writeHead(200)
            res.end(data);
        }
    })
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
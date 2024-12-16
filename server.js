import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const port = process.env.PORT || 3000;

const __filename= url.fileURLToPath(import.meta.url);
const __dirnamee=path.dirname(__filename);


console.log(__filename,__dirnamee);

// Create the server and define how it responds to requests
const server = http.createServer((req, res) => {

    try {
        if (req.method !== 'GET') {
            if (req.url==='/'){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Home Page</h1>');
            }else if(req.url==='/about'){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About</h1>');
            }else{
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>not found</h1>');
            }

        } else{
            throw new Error(`Method ${req.method.toUpperCase()} is not a valid method`);
        }
    } catch(err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('server error');
    }



});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

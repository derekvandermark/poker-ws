import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const options = {
    key: fs.readFileSync('../../Dev-TLS-SSC/dev-key.pem'),
    cert: fs.readFileSync('../../Dev-TLS-SSC/dev-cert.pem')
};

const httpsServer = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
});

const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { location: `https://${hostname}:${port}${req.url}` });
    res.end();
});

httpServer.listen(3001, hostname, () => {
    console.log('HTTP server will redirect to HTTPS');
});
httpsServer.listen(port, hostname, () => {
    console.log(`HTTPS Server running at https://${hostname}:${port}`);
});
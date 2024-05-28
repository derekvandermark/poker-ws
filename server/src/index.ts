import http from 'http';
import fs from 'fs';
import path from 'path';

const hostname: string = "127.0.0.1";
const port: number = 3000;

const server = http.createServer((req, res) => {
    // temporary hard coding for testing Vite with Node

    // const url = new URL(req.url, `http://${req.headers.host}`);

    // console.log(req.url);

    // if (path.extname(url.pathname) === ".js") {
    //     console.log("js");
    //     res.writeHead(200, { 'content-type': 'text/javascript'});
    //     fs.createReadStream('../client/dist/assets/index-BA-YbtxG.js').pipe(res);
    // } 
    // else if (path.extname(url.pathname) === ".css") {
    //     console.log("css");
    //     res.writeHead(200, { 'content-type': 'text/css'});
    //     fs.createReadStream('../client/dist/assets/index-DiwrgTda.css').pipe(res);
    // } 
    // else if (path.extname(url.pathname) === ".svg") {
    //     console.log("svg");
    //     res.writeHead(200, { 'content-type': 'image/svg+xml'});

    //     if (req.url === "/vite.svg") {
    //         fs.createReadStream('../client/dist/vite.svg').pipe(res);
    //     } else {
    //         fs.createReadStream('../client/dist/assets/react-CHdo91hT.svg').pipe(res);
    //     }
    // } else {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     fs.createReadStream('../client/dist/index.html').pipe(res);
    // } 

    // res.on('finish', () => {
    //     console.log("here");
    //     res.end();
    // });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
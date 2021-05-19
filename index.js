"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const hostname = '127.0.0.1';
const port = 3000;
http_1.default.createServer;
const server = http_1.default.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    readFile(res);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
function readFile(res) {
    fs_1.default.readFile("index.1html", (err, data) => {
        if (err != null) {
            res.writeHead(404, "File not found");
            res.end("File could not found");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}
//# sourceMappingURL=index.js.map
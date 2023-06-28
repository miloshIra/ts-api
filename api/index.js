"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Create an Express app
const app = (0, express_1.default)();
// Define a route handler for the root URL
app.get('/hello', (req, res) => {
    console.log(os_1.default.homedir());
    let osData = {
        total_memory: os_1.default.totalmem(),
        free_memory: os_1.default.freemem(),
        cpu: os_1.default.type(),
        pc_name: os_1.default.hostname()
    };
    console.log(osData);
    res.statusCode = 200;
    res.end(`<pre>${JSON.stringify(osData)}</pre>`);
});
app.get('/json', (req, res) => {
    let json = fs_1.default.readFile(path_1.default.join(__dirname, 'data', 'json.json'), 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
        }
        res.end(`<pre>${result}</pre>`);
    });
});
app.get('/', (req, res) => {
    let hi = 'hi';
    res.statusCode = 404;
    res.end("<p style='color:green; text-align:center; margin-top: 40px;'> This is the end, nothing lives here. 404.</p>");
});
app.get('/files', (req, res) => {
    let file = fs_1.default.readFile(path_1.default.join(__dirname, 'data', 'note.txt'), 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
        }
        fs_1.default.writeFile(path_1.default.join(__dirname, 'data', 'data.txt'), result, 'utf-8', (error) => {
            if (error) {
                console.log(error);
            }
        });
        res.end(`<pre><h3 style='text-align:center; color:green; margin-top:40px;'>${result}</h3></pre>`);
    });
});
// Start the server
const port = 5000;
app.listen(port, () => {
    console.log('This is dumb but....it works.');
    console.log(`Server running at localhost:(127.0.0.1) port:${port}`);
});
app.get('/about', (req, res) => {
    let url;
    url = "Just retring some things, this just a filler";
    res.end(url);
});

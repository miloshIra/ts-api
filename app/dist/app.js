"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);
app.use((req, res, next) => {
    const error = new Error('Page not found');
    res.status(404);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error instanceof HttpError ? error.status : 500).json({
        message: error.message || 'Internal server error.'
    });
});
class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
module.exports = app;
// app.get('/', (req, res) => {
//     res.send('Hello World');
// })
// app.get('/home', (req, res) => {
//     const userInput = readline.question("Enter something: ");
//     let a = 2
//     res.send(`You entered: ${userInput}`)
// })
// app.get('/users', (req, res) => {
//     let users:string[] =  ["Ira", "Mia" , "Marko"]
//     let score:Record<string, number> = {
//     }
//     for (let user of users) {
//         score[user] = Math.floor(Math.random() * 100);
//     }
//     res.json(score)
// })
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);
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

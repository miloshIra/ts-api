import express from 'express';
import readline from 'readline-sync';


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/home', (req, res) => {

    const userInput = readline.question("Enter something: ");
    let a = 2
    res.send(`You entered: ${userInput}`)

})


app.get('/users', (req, res) => {

    let users:string[] =  ["Ira", "Mia" , "Marko"]
    let score:Record<string, number> = {

    }

    for (let user of users) {
        score[user] = Math.floor(Math.random() * 100);
    }

    res.json(score)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

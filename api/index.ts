// Import required modules
import express, { Request, Response } from 'express';
import os from 'os';

// Create an Express app
const app = express();

// Define a route handler for the root URL
app.get('/hello', (req: Request, res: Response) => {
  
  console.log(os.homedir())

  let osData = {
    total_memory: os.totalmem(),
    free_memory: os.freemem(),
    cpu: os.type(),
    pc_name: os.hostname()
  }

  console.log(osData)

  res.statusCode = 200
  res.end(`<pre>${JSON.stringify(osData)}</pre>`)

});


app.get('/', (req:Request, res:Response) => {
  
  res.statusCode = 404
  res.end("<h1 style='color:green;'> This is the end, nothing lives here. 404.</h1>")
})






// Start the server
const port = 5000;
app.listen(port, () => {
  console.log ('This is dumb but....it works.')
  console.log('Host = localhost:(127.0.0.1)')
  console.log(`Server is running on port:${port}`);
});
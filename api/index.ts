// Import required modules
import express, { Request, Response } from 'express';
import { STATUS_CODES } from 'http';

// Create an Express app
const app = express();

// Define a route handler for the root URL
app.get('/hello', (req: Request, res: Response) => {
  
  res.statusCode = 200
  res.end('Hello, World!')

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
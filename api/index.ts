// Import required modules
import express, { Request, Response } from 'express';
import os from 'os';
import path from 'path';
import fs from 'fs';
import axios from 'axios'
import fetch from 'node-fetch'

let region_tags = ['NA', 'EUNE', 'EUW', 'KR', 'BR']
let API_key = 'RGAPI-ffea1b53-df90-41ef-bba1-64787d57a2c1'
let my_puuid = 'YA8Rdc9B5E_2pRPTryQS3oMsJI3gNWH1MJhnCPdMgITv3wckL25NUrycnw1JoSOksj84P2jjeCqrmw'
let game_name = 'SevenxBlades'
let my_region_tag = 'EUNE'
let url:string = 'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Sevenxblades/EUNE'

interface IAPIOptions {
    method: string,
    headers: {
      "X-RapidAPI-Key":string,
      "X-RapidAPI-Host":string,
    }
}


const options: IAPIOptions = {
      method: "GET",
      headers: {
      'X-RapidAPI-Key': API_key,
      'X-RapidAPI-Host': 'no-idea-what-this-is'}
}


// Create an Express app
const app = express();

fetch(url, options)
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err:any) => console.error('error' + err))

app.get('/lol', (req:Request, res: Response) => {

        // const response = fetch(url, {
        //   method: 'get',
        //   headers: {'Content-Type': 'application/json',
        //             'Authorizaion': API_key}

        // })

        // const data = response;

        // const response = fetch('https://github.com/');
        // const body = await response.text();




    })


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


app.get('/json', (req: Request, res: Response) => {

  let json = fs.readFile(path.join(__dirname, 'data', 'json.json'),'utf-8', (error, result) => {
    if (error) {
      console.log(error)  
    }
    res.end(`<pre>${result}</pre>`)
  })
})


app.get('/', (req:Request, res:Response) => {
  let hi = 'hi'
  res.statusCode = 404
  res.end("<p style='color:green; text-align:center; margin-top: 40px;'> This is the end, nothing lives here. 404.</p>")
})


app.get('/files', (req:Request, res:Response) => {

  let file = fs.readFile(path.join(__dirname, 'data', 'note.txt'), 'utf-8', (error, result) => {
    if (error) {
      console.log(error)
    }
    fs.writeFile(path.join(__dirname, 'data', 'data.txt'), result, 'utf-8', (error) => {
      
      if(error) {
        console.log(error)
      }   
    })
    res.end(`<pre><h3 style='text-align:center; color:green; margin-top:40px;'>${result}</h3></pre>`)
  })
});


// Start the server
const port = 5000;
app.listen(port, () => {

  console.log ('This is dumb but....it works.')
  console.log(`Server running at localhost:(127.0.0.1) port:${port}`)

});


app.get('/about', (req:Request, res:Response) => {

  let url:string|undefined 
  url = "Just retring some things, this just a filler"
  res.end(url)

})
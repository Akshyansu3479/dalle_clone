import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";
import Post from '../mongoDB/models/post.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({ //generatinng apiKey. here inside a function we are defining an object
 apiKey : process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

// router.route('/').get((req,res)=>{
//  res.send("Hello from DALL-E");
// })

//calling image through api 
router.route('/').post(async (req,res)=>{
 try {
  const {prompt} = req.body; //here req.body is an object and {prompt} is a property that is used to extract it from req.body
  
  const aiResponse = await openai.createImage({ //openai.createImage({ ... }): This is the function that sends a request to the OpenAI API to create an image. 
   prompt,
   n:1,
   size:'1024x1024',
   response_format: 'b64_json'
  })
  
  console.log(aiResponse);

  const image = aiResponse.data.data[0].b64_json;

  res.status(200).json({photo : image});

 } catch (error) {
  
 }
})

 

export default router;



// app.get('/', async (req, res) => {
//  res.send('Hello from DALL-E');
// });

// In above example:

// app.get('/') sets up a route handler for HTTP GET requests to the root path ('/'). This means that when a client makes a GET request to the server's root URL (e.g., http://localhost:8080/), this route handler will be triggered.

// (req, res) are parameters of the route handler function. req represents the request object, which contains information about the incoming request (e.g., headers, query parameters, request body), and res represents the response object, which is used to send a response back to the client.

// The route handler itself is an asynchronous function defined using async. In this specific example, it's a simple function that sends the string 'Hello from DALL-E' as the response when a GET request is made to the root path. res.send('Hello from DALL-E') sends this text as the response body to the client.

// Route handlers can perform more complex tasks, such as interacting with databases, processing data, and rendering HTML templates. They are a fundamental part of building web applications and APIs using Express.js, as they determine how the server responds to different types of requests.





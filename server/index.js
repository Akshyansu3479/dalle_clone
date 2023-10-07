import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongoDB/connect.js'; //importing mongoDB
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config(); //dotenv is used to load ennviorment variables

const app = express();  // istance of express is created
app.use(cors()); //cors is a way in which browser and server interacts to determine whether it is safe to allow cross origin request.This middleware enables Cross-Origin Resource Sharing, which is crucial when you want to allow requests from different origins (e.g., when building a frontend that communicates with this backend).
app.use(express.json({limit: '50mb'}));

//api hookpoints to connect with frontend side
app.use('/api/v1/post',  postRoutes); //These lines define the routes for the application. It associates URL paths starting with '/api/v1/post' with the postRoutes module and '/api/v1/dalle' with the dalleRoutes module. This means that any requests to these paths will be handled by the route handlers defined in those modules.
app.use('/api/v1/dalle',  dalleRoutes);

app.get('/', async (req,res)=>{ //This code defines a basic route handler for the root path ('/'). When a GET request is made to the root path, it sends the response 'Hello from DALL-E' back to the client.
 res.send('Hello from DALL-E');
})


const startServer = async () => {
 try {
  connectDB(process.env.MONGODB_URL);//connecting mongoDB by passing the url in 'process.env.MONGODB_URL'
  app.listen(8080, ()=>
     console.log('Server has started on port http://localhost:8080'));
 } 
 catch (error) {
   console.log(error);
 }
}

startServer();



// const startServer = async () => {
//   try {
//     connectDB(process.env.MONGODB_URL); //connecting MongoDB by passing the URL in 'process.env.MONGODB_URL'
//     app.listen(8080, () =>
//       console.log('Server has started on port http://localhost:8080')
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();

// This block of code defines an asynchronous function startServer, which is responsible for starting the Express server. Inside the function:
// It attempts to connect to a MongoDB database using the URL stored in the process.env.MONGODB_URL environment variable (loaded earlier using dotenv).
// If the database connection is successful, it starts the Express server on port 8080 and logs a message to the console indicating that the server has started.
// If there is an error in the database connection or server startup, it logs the error to the console.
// Finally, the startServer function is called, initiating the application's execution.
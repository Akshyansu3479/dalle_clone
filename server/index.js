import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongoDB/connect.js'; //importing mongoDB
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config(); //dotenv is used to load ennviorment variables

const app = express();
app.use(cors()); //cors is a way in which browser and server interacts to determine whether it is safe to allow cross origin request.
app.use(express.json({limit: '50mb'}));

//api hookpoints to connect with frontend side
app.use('/api/v1/post',  postRoutes);
app.use('/api/v1/dalle',  dalleRoutes);

app.get('/', async (req,res)=>{
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
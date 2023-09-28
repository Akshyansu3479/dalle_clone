import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";
import Post from '../mongoDB/models/post.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({ //generatinng apiKey.
 apiKey : process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req,res)=>{
 res.send("Hello from DALL-E");
})


export default router;
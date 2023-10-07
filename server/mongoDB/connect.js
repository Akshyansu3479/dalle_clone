import mongoose from "mongoose";

const connectDB = (url) =>{ //accepting url from inndex.js > connectDB(process.env.MONGODB_URL)
 mongoose.set('strictQuery' , true); //useful when working with search functionality

 mongoose.connect(url)
    .then(()=>{console.log("MongoDB connected successfully")})
    .catch((err)=>console.log(err));
}

export default connectDB;
